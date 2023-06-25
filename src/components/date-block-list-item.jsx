import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { DateBlock } from "./date-block-item";

function stringToKrTime(curr){
    const utc=curr.getTime()+(curr.getTimezoneOffset()*60*1000);
    
    const KR_TIME_DIFF=9*60*60*1000;
    const kr_curr=new Date(utc+(KR_TIME_DIFF));
    
    // console.log("kr_curr: ", kr_curr.getYear(), kr_curr.getMonth(), kr_curr.getDate(), 
    //     kr_curr.getHours(), kr_curr.getMinutes(), kr_curr.getSeconds());
    return kr_curr;
}

export const DateBlockList=styled(({className})=>{
    const [timeBlockList, setTimeBlockList]=useState([]);
    const { currentTaskId, currentSubtaskId } = useParams();
    
    useEffect(()=>{
        // const fetchTaskList=()=>{
        //     // *** currentTaskId로 오늘 날짜부터 task의 deadline까지의 시간 block list를 받아오는 엔드포인트 ***
        //     axios.get("http://127.0.0.1:8000/delivery/~~~")
        //     .then((response)=>{
        //         if(response.success){
        //             setTaskList([...response.result]);                
        //             console.log()
        //         }
        //     })
        //     .catch((e)=>{
        //         alert(e);
        //     })
        // }
        setTimeBlockList([
            {
                "start_time": "2023-06-12 06:00:00",
                "end_time": "2023-06-12 10:00:00",
                "task_id": 1,
                "task_name": "데베시 과제",
                "subtask_id": 2,
                "subtask_name": "phase2"
            },
            {
                "start_time": "2023-06-12 10:00:00",
                "end_time": "2023-06-12 12:00:00",
                "task_id": 1,
                "task_name": "데베시 과제",
                "subtask_id": 1,
                "subtask_name": "phase1"
            },
            {
                "start_time": "2023-06-13 13:00:00",
                "end_time": "2023-06-13 14:00:00",
                "task_id": 1,
                "task_name": "데베시 과제",
                "subtask_id": 2,
                "subtask_name": "phase2"
            },
            {
                "start_time": "2023-06-13 15:00:00",
                "end_time": "2023-06-13 19:00:00",
                "task_id": 1,
                "task_name": "데베시 과제",
                "subtask_id": 1,
                "subtask_name": "phase1"
            }
        ]);
    }, []);
    
    const deadlineTime=stringToKrTime(new Date("2023-06-26 23:59:59"));
    
    // const currentTime=stringToKrTime(new Date());
    const currentTime=stringToKrTime(new Date("2023-06-11 00:00:00"));
    
    const currentTimeYear=currentTime.getFullYear();
    const currentTimeMonth=currentTime.getMonth();
    const currentTimeDate=currentTime.getDate();
    
    
    
    const dateBlockRendering=()=>{
        const result=[];
        for(const today=new Date(currentTimeYear, currentTimeMonth, currentTimeDate, 6,0,0);
            today<deadlineTime ; today.setDate(today.getDate()+1))
        {
            const tomorrow=new Date(today);
            tomorrow.setDate(tomorrow.getDate()+1);
            //console.log("today: ",today);
            //console.log("tomorrow: ",tomorrow);
            const timeBlockAtParticularDateList = timeBlockList.filter((timeBlock)=>{
                const timeBlockStartTime=stringToKrTime(new Date(timeBlock.start_time))
                return timeBlockStartTime >= today && timeBlockStartTime <tomorrow && (timeBlock.task_id==currentTaskId && (timeBlock.subtask_id==currentSubtaskId || currentSubtaskId==undefined));
            })
            result.push(<DateBlock date={{year: today.getFullYear(), month: today.getMonth(), date: today.getDate()}} timeBlockList={[...timeBlockAtParticularDateList]}></DateBlock>)
        }
        return result;
    }
    
    
    
    //console.log("exaple: ",new Date({...timeBlockList[0]}.start_time) < today);
    
    
    
    //console.log(timeBlockAtParticularDateList);
    
    return (
        <div className={className}>
            {/* {currentTaskId} */}
            {/* {currentSubtaskId} */}
            {dateBlockRendering()}
        </div>
    )
})`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display:flex;
    overflow-x:scroll;
    overflow-y:hidden;
    //font-size: 10rem;
`;