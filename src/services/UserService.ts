import { firestore, firebase, auth } from "../resources/firebase";

const db = firestore.collection("/users");

export const getCurrentUser = (): firebase.User | null => {
  return auth.currentUser;
};

export const createUserProfileInFirebase = async (user: firebase.User) => {
  if (!user) return;
  const userRef = await db.doc(user.uid);
  const userSnaphot = userRef.get();

  if (!(await userSnaphot).exists) {
    const { displayName, email, photoURL, uid } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        uid,
      });
    } catch (error) {
      console.error("error creating the user", error.message);
    }
  }

  return userRef;
};
