import { Stack, Typography } from "@mui/material";

const ItemDescription = ({ item }) => {
  const { title, description, price } = item;
  return (
    <Stack width="100%" sx={{ my: 2, gap: 2 }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body" color="gray">
        {description}
      </Typography>
      <Typography color="success.dark" variant="h4">
        $ {price}
      </Typography>
    </Stack>
  );
};

export default ItemDescription;
