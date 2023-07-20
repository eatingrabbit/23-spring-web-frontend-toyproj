import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { DateBlock } from "./date-block-item";
import { TimeStandardRowList, TimeStandardNumberList } from "./time-standard";

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
                "task_id": null,
                "task_name": null,
                "subtask_id": null,
                "subtask_name": null,
                "nontask_id": 1,
                "nontask_name": "학교"
            },
            {
                "start_time": "2023-06-12 16:00:00",
                "end_time": "2023-06-12 20:00:00",
                "task_id": 1,
                "task_name": "데베시 과제",
                "subtask_id": 2,
                "subtask_name": "phase2",
                "nontask_id": null,
                "nontask_name": null
            },
            {
                "start_time": "2023-06-12 10:00:00",
                "end_time": "2023-06-12 12:00:00",
                "task_id": 1,
                "task_name": "데베시 과제",
                "subtask_id": 1,
                "subtask_name": "phase1",
                "nontask_id": null,
                "nontask_name": null
            },
            {
                "start_time": "2023-06-13 06:00:00",
                "end_time": "2023-06-13 10:00:00",
                "task_id": null,
                "task_name": null,
                "subtask_id": null,
                "subtask_name": null,
                "nontask_id": 1,
                "nontask_name": "학교"
            },
            {
                "start_time": "2023-06-13 12:00:00",
                "end_time": "2023-06-13 14:00:00",
                "task_id": 1,
                "task_name": "데베시 과제",
                "subtask_id": 2,
                "subtask_name": "phase2",
                "nontask_id": null,
                "nontask_name": null
            },
            {
                "start_time": "2023-06-13 15:20:00",
                "end_time": "2023-06-14 01:00:00",
                "task_id": 1,
                "task_name": "데베시 과제",
                "subtask_id": 1,
                "subtask_name": "phase1",
                "nontask_id": null,
                "nontask_name": null
            },
            {
                "start_time": "2023-06-14 06:00:00",
                "end_time": "2023-06-14 10:00:00",
                "task_id": null,
                "task_name": null,
                "subtask_id": null,
                "subtask_name": null,
                "nontask_id": 1,
                "nontask_name": "학교"
            },
            {
                "start_time": "2023-06-14 13:20:00",
                "end_time": "2023-06-14 23:00:00",
                "task_id": 2,
                "task_name": "그래픽스 과제",
                "subtask_id": null,
                "subtask_name": null,
                "nontask_id": null,
                "nontask_name": null
            },
        ]);
    }, []);
    
    const deadlineTime=stringToKrTime(new Date("2023-07-03 23:59:59"));
    
    // const currentTime=stringToKrTime(new Date());
    const currentTime=stringToKrTime(new Date("2023-06-11 00:00:00"));
    
    const currentTimeYear=currentTime.getFullYear();
    const currentTimeMonth=currentTime.getMonth();
    const currentTimeDate=currentTime.getDate();
    
    
    
    const dateBlockRendering=()=>{
        const result=[];
        for(const today=new Date(currentTimeYear, currentTimeMonth, currentTimeDate, 6,0,0);    //today: 현재 날짜 오전 6시
            today<deadlineTime ; today.setDate(today.getDate()+1))
        {
            const tomorrow=new Date(today);
            tomorrow.setDate(tomorrow.getDate()+1);                                             //tomorrow: 내일 오전 6시
            //console.log("today: ",today);
            //console.log("tomorrow: ",tomorrow);
            
            // 특정 날짜의 timeBlock들만 모은 list
            const timeBlockAtParticularDateList = timeBlockList.filter((timeBlock)=>{
                const timeBlockStartTime=stringToKrTime(new Date(timeBlock.start_time))
                //filter:
                // today와 tomorrow 사이 timeBlockStartTime가 있다
                return timeBlockStartTime >= today && timeBlockStartTime <tomorrow;
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
            <TimeStandardRowList></TimeStandardRowList>
            <TimeStandardNumberList></TimeStandardNumberList>
            {dateBlockRendering()}
        </div>
    )
})`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display:flex;
    //flex-direction: column;
    
    overflow-x:scroll;
    overflow-y:scroll;
    //font-size: 10rem;
    
    position: relative;
`;