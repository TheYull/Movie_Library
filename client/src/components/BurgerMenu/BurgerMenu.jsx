import React, { useState } from "react";
import { IconButton, Drawer, List } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import BurgerMenuList from "./BurgerMenuList";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <List>
          <BurgerMenuList onClose={toggleDrawer(false)} />
        </List>
      </Drawer>
    </div>
  );
};

export default BurgerMenu;