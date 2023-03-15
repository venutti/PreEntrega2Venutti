import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const Item = ({ item }) => {
  const { id, title, price, pictureUrl } = item;

  return (
    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea component={RouterLink} to={`/item/${id}`}>
        <CardMedia component="img" height="200" image={pictureUrl} />
        <CardContent sx={{ bgcolor: "warning.light" }}>
          <Typography variant="h6" sx={{ lineHeight: 1.3 }}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="success.dark"
          >{`$ ${price}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
