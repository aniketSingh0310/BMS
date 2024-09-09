import React from "react";
import PageTitle from "../../Components/PageTitle";
import { Tabs } from "antd";
import MoviesList from "./MovieList";
import { TheatreList } from "./TheatreList";

const Admin = () => {
  return (
    <div>
      <PageTitle title="Admin" />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane key="1" tab="Movies">
          <MoviesList />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="Theatre">
          <div><TheatreList/></div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Admin;