import {getApp,getApps,initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig={
 apiKey:"AIzaSyAK8kBK3jn4q6Jchb5TP7FFRwWVqeFmC7Y",
 authDomain:"sabipolitics.firebaseapp.com",
 projectId:"sabipolitics",
 storageBucket:"sabipolitics.firebasestorage.app",
 messagingSenderId:"68746575874",
 appId:"1:68746575874:web:3dce1df6a352809df9271b"
};
const app=getApps().length?getApp():initializeApp(firebaseConfig);
export const auth=getAuth(app);