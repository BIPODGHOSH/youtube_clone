import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    alignItems="center"
    direction="row"
    p={2}
    sx={{
      position: "sticky",
      top: 0,
      zIndex: "100",
      background: "#000",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        variant="h6"
        color={"#fff"}
        fontSize={{ sm: "15px" }}
        ml={{ sm: "10px", md: "20px" }}
      >
        YouTube
        <Typography
          variant="span"
          color={"#868585"}
          fontSize={"12px"}
          position={"fixed"}
          top="8"
        >
          IN
        </Typography>
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
