import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import db from "../../../firebase/firebase";

const itemsCollection = collection(db, "items");

const itemsSnapshotToArray = (snapshot) => {
  const itemsList = [];
  snapshot.forEach((doc) => {
    const item = { id: doc.id, ...doc.data() };
    itemsList.push(item);
  });
  return itemsList;
};

const getAllItems = async () => {
  const itemsSnapshot = await getDocs(itemsCollection);
  return itemsSnapshotToArray(itemsSnapshot);
};

const getItemsByCategory = async (category) => {
  const q = query(itemsCollection, where("category", "==", category));
  const itemsSnapshot = await getDocs(q);
  return itemsSnapshotToArray(itemsSnapshot);
};

const getItemById = async (id) => {
  const itemDoc = doc(itemsCollection, id);
  const itemSnap = await getDoc(itemDoc);

  if (itemSnap.exists()) {
    return { id: itemSnap.id, ...itemSnap.data() };
  } else {
    return null;
  }
};

export { getAllItems, getItemsByCategory, getItemById };
