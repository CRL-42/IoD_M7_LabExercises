// Exercise 4.
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/MyThemeProvider";

import { AppBar } from "@mui/material";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);
  
  return (
    <AppBar>
    <nav
      className="NavBar"
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/bitcoinRates">Bitcoin Rates</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
    </AppBar>
  );
}
// Exercise 4 end.