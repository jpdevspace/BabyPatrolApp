import React, { createContext, useEffect, useState } from "react";
import { 
  loadBabyRecordsByTimeAsc,
  loadBabyLastRecords
} from "../controllers/firebaseDB";

export const BabyRecordsContext = createContext();

const BabyRecordsContextProvider = props => {
  const [ babyRecords, setBabyRecords ] = useState([]);
  const [ lastRecords, setLastRecords ] = useState(null);

  useEffect(() => {
    const getAllRecordsByTimeAsc = async () => setBabyRecords(await loadBabyRecordsByTimeAsc());
    const getLastRecordByActivity = async () => setLastRecords(await loadBabyLastRecords());

    getAllRecordsByTimeAsc();
    getLastRecordByActivity();
  }, []);

  // TODO JP: I will probably need a method to add new activities

  return (
    <BabyRecordsContext.Provider value={{ babyRecords, lastRecords }}>
      {props.children}
    </BabyRecordsContext.Provider>
  );
};

export default BabyRecordsContextProvider;
