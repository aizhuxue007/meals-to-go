import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async (auth, email, password) => {
    console.log(email, password)
    return await signInWithEmailAndPassword(auth, email, password);
}