import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./DropdownMenu.scss";

export const DropdownMenu = ({ title, items, contentType, isFilter = true }) => {
    const navigate = useNavigate(); 

    const handleSelect = (item) => {
        const formattedItem = item.replace(/\s+/g, "_").toLowerCase();

        if (isFilter) {
            const contentMap = {
                movies: "movie",
                tvshows: "tv",
            };
            const contentPath = contentMap[contentType] || "movie";

            const specialRoutes = { 
                "on_tv": "/tv/on_the_air", 
                "on_the_air": "/tv/on_the_air", 
            };
            const route = specialRoutes[formattedItem] || `/filter/${contentPath}/${formattedItem}`;
            navigate(route);
            // if (item === "on_tv" || item === "on_the_air") {
            //     navigate(`/tv/on_the_air`); 
            // } else {
            //     navigate(`/filter/${contentPath}/${formattedItem}`);
            // }
        } else {
            const specialRoutes = {
                "popular_people": "/person",
                "info": "/more",
            };
            const route = specialRoutes[formattedItem] || "/";

            navigate(route);
        }
        handleClose();
    };


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                {title}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onMouseLeave={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                {items && items.map((item, index) => (
                    <MenuItem key={index} onClick={() => handleSelect(item)}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};
