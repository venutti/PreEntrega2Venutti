import { Box } from "@mui/material";
import Item from "./Item";

const ItemList = ({ items }) => {
  const renderedItems = items.map((item) => <Item key={item.id} item={item} />);

  return (
    <Box
      sx={{
        m: 2,
        display: "flex",
        gap: 2,
        maxWidth: "1000px",
        flexWrap: "wrap",
      }}
    >
      {renderedItems}
    </Box>
  );
};

export default ItemList;
