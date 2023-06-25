import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const TimeBlockDiv=styled.div`
    position: absolute;
    top: calc(4rem + ${(props)=>{return props.yPos}}px);
    height: ${(props)=>{return props.height}}px;
`;
const TaskNameSpan=styled.span`
    color: #8f96a3;
    font-size: 0.9rem;
`;
const SubtaskNameSpan=styled.span`
    color: #8f96a3;
    font-size: 0.7rem;
`;

const TimeBlock=styled(({className, timeBlock})=>{
    const startTime=new Date(timeBlock.start_time);
    const endTime=new Date(timeBlock.end_time);
    const requiredTimezone=(endTime.getTime()-startTime.getTime())/(60*1000);
    const yPos=((startTime.getHours()-6)*12 + startTime.getMinutes())*5;
    console.log("requiredTimezone:", requiredTimezone);
    console.log("ypos: ",yPos);
    
    //console.log(requiredTimezone);
    
    return <TimeBlockDiv className={className} height={requiredTimezone} yPos={yPos}>
        <TaskNameSpan>{timeBlock.task_name}</TaskNameSpan> <br/>
        <SubtaskNameSpan>{timeBlock.subtask_name}</SubtaskNameSpan>
    </TimeBlockDiv>
})`
    //text-align: center;
    width: 100%;
    border-radius:5px;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radious: 30%;
    background-color: #001233;
    color: #fff;
`;

const DateTextBlock=styled(({className, date})=>{   //date.year, date.month, date.date
    return <div className={className}>{date.month+1}.{date.date}</div>;
})`
    text-align: center;
    background-color: #efe0ca;
    color: #001233;
    height: 4rem;
    font-size: 3rem;
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
    height: 100%;
    color: #001233;
    background-color: #fff;
    border-right: 1px solid #ddd;
`;