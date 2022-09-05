import React from "react";
import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

const selectedCategory_temp = "New";

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, index) => (
        <button
          key={index}
          className="category-btn"
          style={{
            background: category.name === selectedCategory_temp && "#fc1503",
            color: "white",
          }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
