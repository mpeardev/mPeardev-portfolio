import { ref, get } from "firebase/database";
import { database } from "./firebase-config";

const dbRef = ref(database);

// Obtener datos
export const fetchData = async (path) => {
  try {
    const snapshot = await get(ref(database, path));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
