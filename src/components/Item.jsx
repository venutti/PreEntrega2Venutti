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
    <Card sx={{ width: 200, height: 300 }}>
      <CardActionArea
        component={RouterLink}
        to={`/item/${id}`}
        sx={{ height: "100%" }}
      >
        <CardMedia component="img" height="200" image={pictureUrl} />
        <CardContent sx={{ height: "100%", bgcolor: "warning.light" }}>
          <Typography variant="h6" sx={{ lineHeight: 1.3 }}>
            {title}
          </Typography>
          <Typography
            variant="body"
            color="success.dark"
          >{`$ ${price}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;

{
  /*  */
}
