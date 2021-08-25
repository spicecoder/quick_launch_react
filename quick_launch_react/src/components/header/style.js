import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
