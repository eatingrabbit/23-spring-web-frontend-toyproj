import axios from "axios";

import { createContext, useEffect, useState } from "react";

export const CurrentTaskIdContext=createContext(null);

export const CurrentTaskIdContextProvider=({children})=>{
    const [currentTaskId, setCurrentTaskId]=useState(1);
    
    useEffect(()=>{
        // 선택: 처음 선택할 task의 ID 받아오는 작업
    },[]);
    
    return(
        <CurrentTaskIdContext.Provider value={{currentTaskId: currentTaskId, setCurrentTaskId: setCurrentTaskId}}>{children}</CurrentTaskIdContext.Provider>
    );
};