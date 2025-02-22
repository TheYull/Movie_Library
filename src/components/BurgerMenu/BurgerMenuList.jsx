import React from "react";
import { List } from "@mui/material";
import BurgerMenuItem from "./BurgerMenuItem";
import ThemeSwitcher from "../../features/theme/components/ThemeSwitcher/ThemeSwitcher";

const menuItems = [
  {
    title: "Movies",
    items: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
    contentType: "movies",
  },
  {
    title: "TV Shows",
    items: ["Popular", "Airing Today", "On Tv", "Top Rated"],
    contentType: "tvshows",
  },
  {
    title: "People",
    items: ["Popular People"],
    contentType: "persons",
  },
  {
    title: "More",
    items: ["Info"],
    contentType: "more",
  },
  { title: "User", link: "/user" },
];

const BurgerMenuList = ({ onClose }) => {
  return (
    <List>
      {menuItems.map((item, index) => (
        <BurgerMenuItem key={index} item={item} onClose={onClose} />
      ))}
      <ThemeSwitcher />
    </List>
  );
};

export default BurgerMenuList;