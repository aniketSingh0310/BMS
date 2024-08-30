import React, { useEffect, useState } from "react";
import MovieForm from "./MovieForm";
import Button from "../../Components/Button";
import { Table, message ,Tag} from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { DeleteMovie, GetAllMovies } from "../../ApiCalls/Movies";

const genreColors = {
  Action: 'volcano',
  Comedy: 'gold',
  Drama: 'blue',
  Romance: 'pink',
  Thriller: 'purple',
  Suspense: 'red'
};
const MoviesList = () => {
  const [showMovieFormModal, setShowMovieFormModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [formType, setFormType] = useState("add");
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllMovies();
      if (response.success) {
        setMovies(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error);
    }
  };
  const handleDelete = async (movieId) => {
    try {
      dispatch(ShowLoading());
      const response = await DeleteMovie(movieId);
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
        
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error);
    }
  };

  const columns = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (_, record) => {
        return (
          <img
            src={record?.poster}
            alt="Poster"
            height="60"
            width="80"
            className="br-1"
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      render: (_, { genre }) => (
        <>
          {genre.map((genre) => {
            const color = genreColors[genre] || 'green'; // Fallback color if genre is not in the list
            return (
              <Tag color={color} key={genre}>
                {genre.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Language',
      dataIndex: 'language',
      render: (_, { language }) => (
        <>
          {language.map((lang) => (
            <Tag color="blue" key={lang}>
              {lang.toUpperCase()}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (_, record) => {
        return moment(record?.releaseDate).format("DD-MM-YYYY");
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <div className="flex gap-1">
            <i
              className="ri-delete-bin-line"
              onClick={() => {
                handleDelete(record._id);
              }}
            ></i>
            <i
              className="ri-pencil-line"
              onClick={() => {
                setSelectedMovie(record);
                setFormType("edit");
                setShowMovieFormModal(true);
              }}
            ></i>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="flex justify-end mb-1 py-6">
        <Button
          title="Add Movie"
          variant="outlined"
          onClick={() => {
            setShowMovieFormModal(true);
            setFormType("add");
          }}
        />
      </div>
      <Table dataSource={movies} columns={columns} />
      {showMovieFormModal && (
        <MovieForm
          showMovieFormModal={showMovieFormModal}
          setShowMovieFormModal={setShowMovieFormModal}
          formType={formType}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          getData={getData}
        />
      )}
    </div>
  );
};

export default MoviesList;