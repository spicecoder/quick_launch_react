import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import useStyles from "./style.js";
import HeaderMenu from "./HeaderMenu";
import { useHistory } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography
          onClick={() => history.push("/")}
          variant="h5"
          className={classes.title}
        >
          Quick App
        </Typography>
        <Box display="flex" style={{ paddingRight: "10px" }}>
          <HeaderMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
