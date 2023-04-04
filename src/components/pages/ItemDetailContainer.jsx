import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../services/database";

import { Box, Container, Skeleton } from "@mui/material";
import ItemDetail from "../ItemDetail";
import NotFoundAlert from "../alerts/NotFoudAlert";
import ItemDetailSkeleton from "../skeletons/ItemDetailSkeleton";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id: itemID } = useParams();

  const getItem = async () => {
    setLoading(true);
    const itemData = await getItemById(itemID);
    if (!itemData) setError(true);
    setItem(itemData);
    setLoading(false);
  };

  useEffect(() => {
    getItem();
  }, [itemID]);

  if (error) return <NotFoundAlert />;

  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      {loading ? <ItemDetailSkeleton /> : <ItemDetail item={item} />}
    </Container>
  );
};

export default ItemDetailContainer;
