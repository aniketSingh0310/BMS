import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../ApiCalls/user";
import { SetUser } from "../redux/userSlice";
import { HideLoading, ShowLoading } from "../redux/loaderSlice";

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getPresentUser = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetCurrentUser();
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        dispatch(SetUser(null));
        message.error(response.message);
        navigate("/login");
      }
    } catch (error) {
      dispatch(SetUser(null));
      message.error(error.message);
      navigate("/login");
    } finally {
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    if (localStorage.getItem("tokenForBms")) {
      getPresentUser();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    user && (
      <div className="flex flex-col p-1">
        <div className="bg-red-300 flex justify-between p-2">
          <div>
            <h1
              className="text-3xl font-bold text-black cursor-pointer"
              onClick={() => navigate("/")}
            >
              BookMyShowss
            </h1>
          </div>
          <div className="bg-white p-1 flex gap-3 items-center">
            <i className="ri-shield-user-line text-primary mt-1"></i>
            <h1
              className="text-sm underline"
              onClick={() => {
                if (user.isAdmin) {
                  navigate("/admin");
                } else {
                  navigate("/profile");
                }
              }}
            >
              {user.name}
            </h1>
            <i
              className="ri-logout-box-line mt-1"
              onClick={() => {
                localStorage.removeItem("tokenForBms");
                navigate("/login");
              }}
            ></i>
          </div>
        </div>
        <div className="p-2">{children}</div>
      </div>
    )
  );
};

export default ProtectedRoutes;
