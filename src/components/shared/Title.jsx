import { Typography } from "@mui/material";

const Title = ({ children }) => {
  return (
    <Typography
      variant="h4"
      sx={{ textAlign: "center", my: 2, fontWeight: "600" }}
    >
      {children}
    </Typography>
  );
};

export default Title;
