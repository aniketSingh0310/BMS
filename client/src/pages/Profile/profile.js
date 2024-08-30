import React from "react";
import PageTitle from "../../Components/PageTitle";
import { Tabs } from "antd";
import TheatresList from "./TheatreList";

const Profile = () => {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
          {/* <Bookings /> */}
          <div>Booking</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theater" key="2">
           <TheatresList /> 
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;