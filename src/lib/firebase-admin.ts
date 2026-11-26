import { getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const app = getApps()[0] ?? initializeApp({projectId:process.env.GCLOUD_PROJECT||"sabipolitics",storageBucket:"sabipolitics.firebasestorage.app"});
export const db = getFirestore(app);