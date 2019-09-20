import firebase from "../config/firebaseConfig";

const db = firebase.firestore();

// Auth State Observer
firebase.auth().onAuthStateChanged(user => {
    if (user) {
    console.log("[onAuthStateChanged] True");
  } else {
    console.log("[onAuthStateChanged] False");
  }
});

export const loadBabyRecordsByTimeAsc = () => {
  let res = [];
  return new Promise(async (resolve, reject) => {
    try {
      // Gets recrods sorted from oldest to newest
      const allRecords = await db.collection("events").orderBy("time", "desc").get()
      allRecords.forEach(doc => res.push(doc.data()))
      return resolve(res)
    } catch (err) {
      return reject(err)
    }
  });
};

export const loadBabyLastRecords = () => {
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
};

export const addBabyRecords = ({ comment, time, type }) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.collection("events").add({ comment, time, type });
    } catch (err) {
      return reject(err);
    }
  });
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

export const loginUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      console.error(`Error at loginUser() \n Error Code: ${err.code} \n Msg: ${err.message}`)
      return false;
    })
}

export const logoutUser = () => {
  firebase.auth().signOut()
    .then(() => {
    // Sign-out successful.
    console.log("Sign-out successful.")
    })
    .catch(err => {
      console.error(`Error at logoutUser() \n Error Code: ${err.code} \n Msg: ${err.message}`)
    })
}