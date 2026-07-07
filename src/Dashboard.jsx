import React from "react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold">
        Welcome, {user?.fullname}
      </h1>
    </div>
  );
};

export default Dashboard;