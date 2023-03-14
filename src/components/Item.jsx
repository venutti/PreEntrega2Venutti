import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Item = ({ item }) => {
  const { id, title, price, pictureUrl } = item;

  return (
    <Card sx={{ maxWidth: 150 }}>
      <CardActionArea>
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
