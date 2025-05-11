import React from "react";
import Button from "./Button";
import { Link } from "react-router";

function Header() {
  return (
    <nav className="navbar">
      <h1>Employee management</h1>
      <div>
        <Link to="/add-employee">
          <Button children="AddEmployee" className="button" />
        </Link>
        <Link to="/home">
          <Button children="All Employee" className="button" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
