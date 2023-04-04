import { Card, CardContent, Skeleton, Stack } from "@mui/material";

const ItemListSkeleton = () => {
  const numCards = 4;

  const renderedCards = Array.from({ length: numCards }, (_, i) => (
    <Card key={i} sx={{ width: 200, height: 300 }}>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  ));

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ flexWrap: "wrap", gap: 2 }}
    >
      {renderedCards}
    </Stack>
  );
};

export default ItemListSkeleton;
