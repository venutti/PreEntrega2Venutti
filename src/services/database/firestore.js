import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import db from "../firebase/firebase";

const itemsCollection = collection(db, "items");
const ordersCollection = collection(db, "orders");

const itemsSnapshotToArray = (itemsSnapshot) => {
  const itemsArray = [];
  itemsSnapshot.forEach((doc) => {
    itemsArray.push({ id: doc.id, ...doc.data() });
  });
  return itemsArray;
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

const addOrder = async (order) => {
  const orderRef = await addDoc(ordersCollection, order);
  return orderRef.id;
};

export { getAllItems, getItemsByCategory, getItemById, addOrder };
