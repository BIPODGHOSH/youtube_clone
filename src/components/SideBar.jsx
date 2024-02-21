import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "100%", md: "100%" },
        flexDirection: { md: "column" },
        position: "sticky",
        top: 20,
      }}
    >
      {categories.map((item) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(item.name)}
          style={{
            background: item.name === selectedCategory && "#fc1503",
            color: "white",
          }}
          key={item.name}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "white" : "red",
              marginRight: "10px",
            }}
          >
            {item.icon}
          </span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;