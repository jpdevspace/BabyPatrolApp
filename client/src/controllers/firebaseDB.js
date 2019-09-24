import firebase from "../config/firebaseConfig";

const db = firebase.firestore();

export const loadBabyRecordsByTimeAsc = uid => {
  if (uid) {
    let res = [];

    // Gets recrods sorted from oldest to newest
    return db
      .collection("events")
      .orderBy("time", "desc")
      .get()
      .then(allRecords => {
        allRecords.forEach(doc => res.push(doc.data()));
        return res;
      })
      .catch(err => err);
  }
  throw Error("notAuthed");
};

export const loadBabyLastRecords = uid => {
  if (uid) {
    let lastRecordsByType = {
      feed: null,
      pee: null,
      poop: null,
      sleep: null
    };
  
    return new Promise(async (resolve, reject) => {
      try {
       
        const getLastRecord = arr => arr.forEach(recs => lastRecordsByType[recs.data().type] = recs.data());
  
        const lastPee = (
          await db
            .collection("events")
            .where("type", "==", "pee")
            .orderBy("time", "desc")
            .limit(1)
            .get()
        );
  
        const lastFeed = (
          await db
            .collection("events")
            .where("type", "==", "feed")
            .orderBy("time", "desc")
            .limit(1)
            .get()
        );
  
        const lastPoop = (
          await db
            .collection("events")
            .where("type", "==", "poop")
            .orderBy("time", "desc")
            .limit(1)
            .get()
        );
  
        const lastSleep = (
          await db
            .collection("events")
            .where("type", "==", "sleep")
            .orderBy("time", "desc")
            .limit(1)
            .get()
        );
        
        getLastRecord(lastFeed);
        getLastRecord(lastPee);
        getLastRecord(lastPoop);
        getLastRecord(lastSleep);
  
        return resolve(lastRecordsByType);
      } catch (err) {
        return reject(err);
      }
    });
  }
  throw Error("notAuthed");
};

export const addBabyRecords = ({ comment, time, type, uid }) => {
  if (uid) {
    console.log("uid for nu record>>>", uid);
    return db
      .collection("records")
      .doc(uid)
      .collection("activities")
      .add({ comment, time, type })
  }
  throw Error("notAuthed");
};

/*
First register the new user, then create a new collection called "users"
and put the baby name in it, in the future this collection will hold additional 
user info
*/
export const registerUser = (email, password, babyName) => {
  console.log("registerUser()");
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(newUserInfo => {
      db
        .collection("users")
        .doc(newUserInfo.user.uid)
        .set({ babyName });
      
      return newUserInfo.user.uid;
    })
    .catch(err => {
      console.error(`Error at registerUser() \n Error Code: ${err.code} \n Msg: ${err.message}`)
      return false;
    });
}

export const loginUserToFirebase = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      console.error(`Error at loginUser() \n Error Code: ${err.code} \n Msg: ${err.message}`)
      return false;
    })
}

export const logoutUserFromFirebase = () => {
  firebase.auth().signOut()
    .then(() => {
    // Sign-out successful.
    console.log("Sign-out successful.")
    })
    .catch(err => {
      console.error(`Error at logoutUser() \n Error Code: ${err.code} \n Msg: ${err.message}`)
    })
}