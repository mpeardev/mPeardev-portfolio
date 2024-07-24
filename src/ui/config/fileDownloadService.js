// src/services/fileDownloadService.js
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase-config";

export const downloadFile = async (filePath) => {
  const fileRef = ref(storage, filePath);
  try {
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};
