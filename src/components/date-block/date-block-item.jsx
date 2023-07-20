import styled from "styled-components";

import { TimeBlock } from "./time-block-item";

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
                // return <div>{timeBlock.task_name} {timeBlock.subtask_name} {timeBlock.start_time} <br/> {timeBlock.end_time}</div>;
                return <TimeBlock timeBlock={timeBlock}></TimeBlock>
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