import React from "react";
import { Col, Form, message, Modal, Row } from "antd";
import Button from "../../Components/Button";
import { useDispatch } from "react-redux";
import { AddMovie, UpdateMovie } from "../../ApiCalls/Movies";
import moment from "moment";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";

function MovieForm({
  showMovieFormModal,
  setShowMovieFormModal,
  selectedMovie,
  setSelectedMovie,
  getData,
  formType,
}) {
  if (selectedMovie) {
    selectedMovie.releaseDate = moment(selectedMovie.releaseDate).format(
      "YYYY-MM-DD"
    );
  }

  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response = null;

      if (formType === "add") {
        response = await AddMovie(values);
      } else {
        response = await UpdateMovie({
          ...values,
          _id: selectedMovie._id,
        });
      }

      if (response.success) {
        getData();
        message.success(response.message);
        setShowMovieFormModal(false);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <Modal
      title={formType === "add" ? "ADD MOVIE" : "EDIT MOVIE"}
      open={showMovieFormModal}
      onCancel={() => {
        setShowMovieFormModal(false);
      }}
      footer={null}
      width={800}
    >
      <Form layout="vertical" initialValues={selectedMovie} onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Movie Name" name="title">
              <input className="border border-gray-800/40 w-full rounded-md p-2" type="text" placeholder="Enter Movie Name" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Movie Description" name="description">
              <textarea className="border border-gray-800/40 w-full rounded-md p-2" type="text" placeholder="Enter Movie Description" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Movie Duration (Min)" name="duration" >
              <input  className="border border-gray-800/40 w-full rounded-md p-2" type="number" placeholder="Enter movie Duration"  />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Language" name="language">
              <select className="border border-gray-800/40 w-full rounded-md p-[10px]"  name="" id="">
                <option value="">Select Language</option>
                <option value="Telugu">Telugu</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Tamil">Tamil</option>
              </select>
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Movie Release Date" name="releaseDate">
              <input className="border border-gray-800/40 w-full rounded-md p-2" type="date" placeholder="Enter Release Date"  />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Genre" name="genre">
              <select className="border border-gray-800/40 w-full rounded-md p-2" name="" id="">
                <option value="">Select Genre</option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Romance">Romance</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item label="Poster URL" name="poster">
              <input className="border border-gray-800/40 w-full rounded-md p-2" type="text" placeholder="Enter poster URL"  />
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end gap-1">
          <Button
            title="Cancel"
            variant="outlined"
            type="button"
            onClick={() => {
              setShowMovieFormModal(false);
            }}
          />
          <Button title="Save" type="submit" />
        </div>
      </Form>
    </Modal>
  );
}

export default MovieForm;