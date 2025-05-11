import React from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import Header from "./components/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Form />
      <Home /> */}
    </div>
  );
}

export default App;
