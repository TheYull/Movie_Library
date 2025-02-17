import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./DropdownMenu.scss";

export const DropdownMenu = ({ title, items, contentType, isFilter = true }) => {
    const navigate = useNavigate(); 

    const handleSelect = (item) => {
        const formattedItem = item.replace(/\s+/g, "_").toLowerCase();
        // console.log("Selected item:", formattedItem);

        if (isFilter) { 
            const contentMap = {
                movies: "movie",
                tvshows: "tv",
            };
            const contentPath = contentMap[contentType] || "movie";
            navigate(`/filter/${contentPath}/${formattedItem}`);
        } else {
            const specialRoutes = {
                "popular_people": "/person",
                "info": "/more",
            };
        const route = specialRoutes[formattedItem] || "/";
        // console.log("Navigating to:", route); 
        navigate(route);
        }
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // console.log(contentType);
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
