import { IconButton, Menu, MenuItem } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuLinks = ({ links }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderedMenuLinks = links.map((link) => (
    <MenuItem
      key={link.label}
      component={Link}
      to={link.route}
      onClick={handleClose}
    >
      {link.label}
    </MenuItem>
  ));

  return (
    <>
      <IconButton onClick={handleClick}>
        <ExpandMoreRoundedIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {renderedMenuLinks}
      </Menu>
    </>
  );
};

export default MenuLinks;
