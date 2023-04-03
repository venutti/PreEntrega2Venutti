import { Box } from "@mui/material";

const DarkPanel = ({ children, sx }) => {
  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        borderRadius: 2,
        backgroundColor: "grey.400",
        my: 2,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default DarkPanel;
