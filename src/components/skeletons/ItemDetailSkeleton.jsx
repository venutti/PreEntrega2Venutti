import { Box, Skeleton, Stack } from "@mui/material";

const ItemDetailSkeleton = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      sx={{ gap: 2 }}
    >
      <Box>
        <Skeleton variant="rectangular" width={250} height={300} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Skeleton width="100%" height={60} />
        <Skeleton width="100%" height={60} />
        <Skeleton width="100%" height={200} />
      </Box>
    </Stack>
  );
};

export default ItemDetailSkeleton;
