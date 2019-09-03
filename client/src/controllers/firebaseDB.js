import firebase from "../config/firebaseConfig";

const db = firebase.firestore();

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
    })
};

export const loadBabyLastRecords = () => {
  let lastRecordsByType = {
    feed: "",
    pee: "",
    poop: "",
    sleep: ""
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