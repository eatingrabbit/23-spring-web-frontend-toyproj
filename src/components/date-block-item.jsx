import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const TimeBlockDiv=styled.div`
    //text-align: center;
    width: 95%;
    border-radius:5px;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radious: 30%;
    background-color: #001233;
    color: #8f96a3;
    z-index: 2;
    
    position: absolute;
    top: calc(3rem + ${(props)=>{return props.yPos}}rem * 3 + 3px); //DateTextBlock 3rem, 한칸당 3rem, 위아래 padding 3px
    height: calc(${(props)=>{return props.height}}rem * 3 - 6px);   //DateTextBlock 3rem, 한칸당 3rem, 위아래 padding 3px
`;
const TaskNameSpan=styled.span`
    font-size: 0.9rem;
`;
const SubtaskNameSpan=styled.span`
    font-size: 0.7rem;
`;

const TimeBlock=styled(({className, timeBlock})=>{
    const startTime=new Date(timeBlock.start_time);
    const endTime=new Date(timeBlock.end_time);
    const requiredTimezone=(endTime.getTime()-startTime.getTime())/(60*60*1000);   //시간단위
    const yPos=((startTime.getHours()-6)*60 + startTime.getMinutes())/60;          //시간단위
    console.log("requiredTimezone:", requiredTimezone);
    console.log("ypos: ",yPos);
    
    //console.log(requiredTimezone);
    
    return <TimeBlockDiv className={className} height={requiredTimezone} yPos={yPos}>
        <TaskNameSpan>{timeBlock.task_name}</TaskNameSpan> <br/>
        <SubtaskNameSpan>{timeBlock.subtask_name}</SubtaskNameSpan>
    </TimeBlockDiv>
})``;

const DateTextBlock=styled(({className, date})=>{   //date.year, date.month, date.date
    return <div className={className}>{date.month+1}.{date.date}</div>;
})`
    text-align: center;
    background-color: #efe0ca;
    //background-color: #fff;
    color: #001233;
    width: 100%;
    height: 3rem;
    font-size: 2rem;
    position: sticky;
    top: 0;
    z-index: 10;
`;

// const DeadlineTimeBlock=styled(({className, deadline})=>{
    
//     return <TimeBlockDiv className={className}>deadline</TimeBlockDiv>
// })`

// `;

export const DateBlock=styled(({className, date, timeBlockList})=>{
    //console.log("curr time: ",date);
    return (
        <div className={className}>
            <DateTextBlock date={date}></DateTextBlock>
            {timeBlockList.map((timeBlock)=>{
                return <TimeBlock timeBlock={timeBlock}></TimeBlock>
                // return <div>{timeBlock.task_name} {timeBlock.subtask_name} {timeBlock.start_time} <br/> {timeBlock.end_time}</div>;
            })}
        </div>
    )
})`
    position: relative;
    box-sizing: border-box;
    width: 10rem;
    min-width: 10rem;
    //height: 100%;
    height: calc(3rem * (24 - 6 + 1) + 3rem);
    color: #001233;
    background-color: #fff;
    border-right: 1px solid #ddd;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;