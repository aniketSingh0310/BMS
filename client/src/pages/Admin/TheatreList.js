import { Table, Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/loadersSlice';
import { GetAllTheatres, UpdateTheatre } from '../../ApiCalls/theatre';

export const TheatreList = () => {
  const [theatre, setTheatre] = useState([]);
  const dispatch = useDispatch();

  const handleStatusChange = async(theatre) => {
    try {
      dispatch(ShowLoading());
      const response= await UpdateTheatre({
        theatreId:theatre._id,
        ...theatre,
        isActive:!theatre.isActive,

      })
      if(response.success){
        message.success(response.message);
        getData();
      }else{
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(HideLoading());
    }
  };

  

  const columns = [
    {
      title: 'Name', // Changed from "name" to "title"
      dataIndex: 'name',
    },
    {
      title: 'Address', // Changed from "name" to "title"
      dataIndex: 'address',
    },
    {
      title: 'Phone', // Changed from "name" to "title"
      dataIndex: 'number',
    },
    {
      title: 'Email', // Changed from "name" to "title"
      dataIndex: 'email',
    },
    {
      title: 'Owner', // Changed from "name" to "title"
      dataIndex: 'owner',
      render: (_, record) => {
        return record?.owner?.name;
      },
    },
    {
      title: 'Status', // Changed from "name" to "title"
      dataIndex: 'isActive',
      render: (text, record) => {
        if (text) {
          return <span style={{ color: 'green' }}>Active</span>;
        }
        return <span style={{ color: 'red' }}>Pending/Blocked</span>;
      },
    },
    {
      title: 'Action', // Changed from "name" to "title"
      dataIndex: 'action',
      render: (text, record) => {
        return (
          <div className='flex gap-1'>
            {record?.isActive && (
              <Button
                onClick={() => {
                  handleStatusChange(record);
                }}
                type='primary'
                danger
              >
                Block
              </Button>
            )}
            {!record?.isActive && (
              <Button
                onClick={() => {
                  handleStatusChange(record);
                }}
                type='primary'
              >
                Approve
              </Button>
            )}
          </div>
        );
      },
    },
  ];

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllTheatres();
      if (response.success) {
        setTheatre(response.data);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table dataSource={theatre} columns={columns} />
    </div>
  );
};
