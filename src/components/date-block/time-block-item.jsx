import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const TestDiv=styled(({className, taskId, children})=>{
    return (
        <Link to={`/mainPage/${taskId}`} className={className}>
            {children}
        </Link>
    )
})`
    // text-align: center;
    width: 95%;
    border-radius:5px;
    box-sizing: border-box;
    padding: 0.5rem;
    border-radious: 30%;
    background-color: ${(props)=>{return props.backgroundColor}};
    color: ${(props)=>{return props.color}};
    z-index: 2;
    text-decoration: unset;

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

export const TimeBlock=styled(({className, timeBlock})=>{
    const { currentTaskId, currentSubtaskId } = useParams();
    
    const startTime=new Date(timeBlock.start_time);
    const endTime=new Date(timeBlock.end_time);
    const requiredTimezone=(endTime.getTime()-startTime.getTime())/(60*60*1000);   //시간단위
    const yPos=((startTime.getHours()-6)*60 + startTime.getMinutes())/60;          //시간단위
    console.log("requiredTimezone:", requiredTimezone);
    console.log("ypos: ",yPos);
    
    //console.log(requiredTimezone);
    
    const innerText=timeBlock.task_id ? timeBlock.task_name : timeBlock.nontask_name;
    
    // timeBlock의 task_id가 현재 페이지의 currentTaskId이고,
    // timeBlock의 subtask_id가 현재 페이지의 currentSubtaskId이거나, currentSubtaskId가 undefined인 경우
    const [backgroundColor, color]=
    (currentTaskId!=undefined && timeBlock.task_id==currentTaskId && (timeBlock.subtask_id==currentSubtaskId || currentSubtaskId==undefined)) ?
        ["#92b0e8", "#001233"] : ["rgba(102, 151, 219, 0.3)", "#001233"]
    //["rgba(102, 151, 219, 0.8)", "#001233"] 6697db
    
    return( 
        <TestDiv
            className={className}
            taskId={timeBlock.task_id}
            height={requiredTimezone} 
            yPos={yPos} 
            backgroundColor={backgroundColor}
            color={color}
        >
            <TaskNameSpan>{innerText}</TaskNameSpan>
            <br />
            { timeBlock.task_id!=null && <SubtaskNameSpan>{timeBlock.subtask_name}</SubtaskNameSpan>}
        </TestDiv>
    )
})``;
