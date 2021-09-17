import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  onSnapshot,
  setDoc,
} from "@firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getMessaging, onMessage } from "firebase/messaging";

export const getEvents = () => {
  const db = getFirestore();
  return getDocs(collection(db, "events")).then((querySnapshot) => {
    let events = [];
    querySnapshot.forEach((doc) => {
      const { category, start, end, desc, img, gform, type, rules, completed } = doc.data();
      events.push({
        name: doc.id,
        category,
        start,
        end,
        desc,
        img,
        gform,
        type,
        rules,
        completed,
      });
    });
    return events;
  });
};

export const getProfileDetails = async () => {
  let regEvents = [];
  const auth = getAuth();
  const user = auth.currentUser;
  const { displayName: userName, email } = user;
  const db = getFirestore();
  try {
    const userDoc = await getDoc(doc(db, "users", email));
    const { registered = [], group, house } = userDoc.data();
    for (let i of registered) {
      const eventDoc = await getDoc(doc(db, "events", i));
      if (eventDoc.data()) {
        const { category, start, end, desc, img } = eventDoc.data();
        regEvents.push({
          name: i,
          category,
          start,
          end,
          desc,
          img,
        });
      }
    }
    return {
      userName,
      email,
      group,
      house,
      eventPasses: regEvents,
    };
  } catch (err) {
    signOut(auth);
    alert("Sign in using your student login email");
    return {};
  }
};

export const signInFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: "student.onlinedegree.iitm.ac.in",
  });
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      return {
        status: "success",
        token,
        user,
      };
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return {
        status: "error",
        errorCode,
        errorMessage,
        email,
        credential,
      };
    });
};

export const listenEventChange = (callback) => {
  const db = getFirestore();
  const unsub = onSnapshot(doc(db, "events", "current"), (doc) => {
    callback(doc.data());
  });
};

export const updateFCMTokenToDB = ({ fcm }) => {
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  const { email } = user;
  return setDoc(doc(db, "subscription", email), { fcm }).catch((err) => {
    alert(err);
  });
};

export const onMessageListener = () => {
  const messaging = getMessaging();
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};
