import React, { createContext, useEffect, useState } from "react";
import { 
  loadBabyRecordsByTimeAsc,
  loadBabyLastRecords
} from "../controllers/firebaseDB";

export const BabyRecordsContext = createContext();

const BabyRecordsContextProvider = props => {
  const [ babyRecords, setBabyRecords ] = useState([]);
  const [ lastRecords, setLastRecords ] = useState(null);
  /*
  lastRecords: {
    feed: { comment, time, type },
    pee: { comment, time, type },
    poop: { comment, time, type },
    sleep: { comment, time, type }
  }
  */

  useEffect(() => {
    console.log("useEffect() [BabyRecordsContext]");
    const getAllRecordsByTimeAsc = async () => setBabyRecords(await loadBabyRecordsByTimeAsc());
    const getLastRecordByActivity = async () => setLastRecords(await loadBabyLastRecords());

    getAllRecordsByTimeAsc();
    getLastRecordByActivity();
  }, []);

  const newEventAdded = (newBabyRec ) => {
    setBabyRecords([...babyRecords, newBabyRec]);
    setLastRecords({
      ...lastRecords,
      [newBabyRec.type]: newBabyRec 
    })
  };

  return (
    <BabyRecordsContext.Provider value={{ babyRecords, lastRecords, newEventAdded }}>
      {props.children}
    </BabyRecordsContext.Provider>
  );
};

export default BabyRecordsContextProvider;
