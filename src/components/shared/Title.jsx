import { Typography } from "@mui/material";

const Title = ({ children }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        textAlign: "center",
        mt: 3,
        mb: 1,
        fontWeight: "600",
        letterSpacing: -1,
      }}
    >
      {children}
    </Typography>
  );
};

export default Title;
