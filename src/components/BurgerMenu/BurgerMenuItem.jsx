import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const BurgerMenuItem = ({ item, onClose }) => {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  const getRoute = (contentType, item) => {
    const formattedItem = item.replace(/\s+/g, "_").toLowerCase();

    const contentMap = {
      movies: "movie",
      tvshows: "tv",
    };
    const contentPath = contentMap[contentType] || "movie";

    const specialRoutes = {
      "on_tv": "/tv/on_the_air",
      "on_the_air": "/tv/on_the_air",
      "popular_people": "/person",
      "info": "/more",
    };

    return specialRoutes[formattedItem] || `/filter/${contentPath}/${formattedItem}`;
  };

  return item.link ? (
    <ListItem onClick={() => handleNavigation(item.link)}>
      <ListItemText primary={item.title} />
    </ListItem>
    ) : (
    <Accordion
      expanded={expanded === item.title}
      onChange={handleAccordionChange(item.title)}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography>{item.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {item.items.map((subItem, idx) => (
          <ListItem key={idx} onClick={() => handleNavigation(getRoute(item.contentType, subItem))}>
            <Typography>{subItem}</Typography>
          </ListItem>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default BurgerMenuItem;