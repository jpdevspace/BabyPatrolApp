import React, { createContext, useContext, useState } from "react";

import { AuthContext } from "./AuthContext";
import { 
  loadBabyRecordsByTimeAsc,
  loadBabyLastRecords
} from "../controllers/firebaseDB"

export const BabyRecordsContext = createContext();

const BabyRecordsContextProvider = props => {
  const { isAuthed } = useContext(AuthContext);
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

  const loadAllUserData = () => {
    console.log("Trying to loadAllUserData()");
    if (isAuthed) {
      const uid = localStorage.getItem("babyPatrolUID")
      setBabyRecords(loadBabyRecordsByTimeAsc(uid));
      setLastRecords(loadBabyLastRecords(uid));
      // const getAllRecordsByTimeAsc = async () => setBabyRecords(await loadBabyRecordsByTimeAsc());
      // const getLastRecordByActivity = async () => setLastRecords(await loadBabyLastRecords());
  
      // getAllRecordsByTimeAsc();
      // getLastRecordByActivity();
    } else {
      setBabyRecords("notAuthed");
      setLastRecords("notAuthed");
    }
  }

  const newEventAdded = (newBabyRec ) => {
    console.log("newBabyRec >>>", newBabyRec);
    if (babyRecords.length) {
      setBabyRecords([...babyRecords, newBabyRec]);
      setLastRecords({
        ...lastRecords,
        [newBabyRec.type]: newBabyRec 
      });
    } else {
      setBabyRecords([ newBabyRec ]);
      setLastRecords({ [newBabyRec.type]: newBabyRec  });
    }
  };

  return (
    <BabyRecordsContext.Provider value={{ babyRecords, lastRecords, loadAllUserData, newEventAdded }}>
      {props.children}
    </BabyRecordsContext.Provider>
  );
};

export default BabyRecordsContextProvider;
