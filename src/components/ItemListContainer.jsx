import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Alert sx={{ maxWidth: "sm", mx: "auto" }} severity="info">
        {greeting}
      </Alert>
    </Box>
  );
};

export default ItemListContainer;
