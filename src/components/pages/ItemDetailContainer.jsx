import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../services/database";

import { Box, Skeleton } from "@mui/material";
import ItemDetail from "../ItemDetail";
import NotFoundAlert from "../alerts/NotFoudAlert";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id: itemID } = useParams();

  const getItem = async () => {
    setLoading(true);
    const itemData = await getItemById(itemID);
    setItem(itemData);
    setLoading(false);
  };

  useEffect(() => {
    getItem();
  }, [itemID]);

  if (loading) return <Skeleton variant="rounded" width={1000} height={350} />;

  if (!item) return <NotFoundAlert />;

  return (
    <Box sx={{ display: "grid", placeContent: "center", padding: 2 }}>
      <ItemDetail item={item} />
    </Box>
  );
};

export default ItemDetailContainer;
