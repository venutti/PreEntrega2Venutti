import { Stack } from "@mui/material";

import Item from "./Item";

const ItemList = ({ items }) => {
  const renderedItems = items.map((item) => <Item key={item.id} item={item} />);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ flexWrap: "wrap", gap: 2 }}
    >
      {renderedItems}
    </Stack>
  );
};

export default ItemList;
