import firebase from "../config/firebaseConfig";

const db = firebase.firestore();

export const loadBabyRecords = () => {
  let res = [];
    return new Promise(async (resolve, reject) => {
      try {
        const allRecords = await db.collection("events").orderBy("time", "desc").get()
        allRecords.forEach(doc => res.push(doc.data()))
        return resolve(res)
      } catch (err) {
        return reject(err)
      }
    })
};