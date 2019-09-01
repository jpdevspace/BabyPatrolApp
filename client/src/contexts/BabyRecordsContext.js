import React, { createContext, useEffect, useState } from "react";
import { loadBabyRecords } from "../controllers/firebaseDB";

export const BabyRecordsContext = createContext();

const BabyRecordsContextProvider = props => {
  const [babyRecords, setBabyRecords] = useState([]);

  useEffect(() => {
    const getAllRecords = async () => {
      const records = await loadBabyRecords();
      setBabyRecords(records);
    };
    getAllRecords();
  }, []);

  // TODO JP: I will probably need a method to add new activities

  return (
    <BabyRecordsContext.Provider value={{ babyRecords }}>
      {props.children}
    </BabyRecordsContext.Provider>
  );
};

export default BabyRecordsContextProvider;
