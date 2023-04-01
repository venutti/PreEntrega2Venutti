import { Typography } from "@mui/material";

const Subtitle = ({ children, bold = false }) => {
  return (
    <Typography
      variant="h6"
      sx={{ textAlign: "center", my: 0, fontWeight: bold ? "600" : "400" }}
    >
      {children}
    </Typography>
  );
};

export default Subtitle;
