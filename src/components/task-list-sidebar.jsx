import { useEffect, useState, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { CurrentTaskIdContext } from "../context/current-task-context";

import ListGroup from 'react-bootstrap/ListGroup';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faCheck } from '@fortawesome/free-solid-svg-icons'

const StyledListGroup=styled(ListGroup)``;
const StyledListGroupItem=styled(ListGroup.Item)``;
const TaskIcon=styled(({className})=> {return <span className={className}><FontAwesomeIcon icon={faList} /></span>;})`
    display: inline-block;
    width: 1.5rem;
    font-size: 0.8rem;
`;
const CurrentTaskIcon=styled(({className, taskId, currentTaskId, subtaskId, currentSubtaskId})=> {
    return(<>
        {(taskId==currentTaskId && (subtaskId==currentSubtaskId || subtaskId==undefined)) &&
        <span className={className}><FontAwesomeIcon icon={faCheck} /></span>
        }
    </>);
})`
    display: inline-block;
    width: 1.5rem;
    font-size: 0.8rem;
`;

const SubtaskListGroup=styled(({className, taskId, subtaskList})=>{
    const { currentTaskId, currentSubtaskId } = useParams();
    return(
        <StyledListGroup className={className}>
            {subtaskList.length>1 && 
                subtaskList.map((subtask)=>{
                    return (
                    <Link to={`/mainPage/${taskId}/${subtask.subtask_id}`}>
                        <StyledListGroupItem>
                            &nbsp;&nbsp;&nbsp;{subtask.subtask_name}
                            <CurrentTaskIcon taskId={taskId} currentTaskId={currentTaskId} subtaskId={subtask.subtask_id} currentSubtaskId={currentSubtaskId}/>
                        </StyledListGroupItem>
                    </Link>
                    )
                })
            }
        </StyledListGroup>
    );
})`
    ${StyledListGroupItem}{
        background-color: #00091a;
        padding-left: 20px;
    }

`;

export const TaskListSidebar=styled(({className})=>{
    const [taskList, setTaskList]=useState([{
            "task_id": 1,
            "task_name": "예시 Task",
            "subtask_list": [
                {"subtask_name": "예시 Subtask1", "subtask_id": 1},
                {"subtask_name": "예시 Subtask2", "subtask_id": 2}
            ]
            }]);
    const { currentTaskId } = useParams();
    
    useEffect(()=>{
        const fetchTaskList=()=>{
            // *** 전체 task 및 subtask 불러오는 엔드포인트 ***
            // CORS 정책에 의해 막힘 - No 'Access-Control-Allow-Origin' header is present on the requested resource.
            // 해결하기!
            axios.get("http://127.0.0.1:3000/test/")
            .then((response)=>{
                console.log(response);
                if(response.data.success){
                    setTaskList([...response.data.result]);
                    console.log(taskList);
                }
                else{
                    console.log("error: success state is false");
                }
            })
            .catch((e)=>{
                // alert(e);
                console.log(e);
            })
        }
        fetchTaskList();
        // setTaskList([
        //     {
        //     "task_id": 1,
        //     "task_name": "데베시 과제",
        //     "subtask_list": [
        //         {"subtask_name": "phase1", "subtask_id": 1},
        //         {"subtask_name": "phase2", "subtask_id": 2}
        //     ]
        //     },
        //     {
        //         "task_id": 2,
        //         "task_name": "그래픽스 과제",
        //         "subtask_list": [
        //             {"subtask_name": "그래픽스 과제", "subtask_id": 1}
        //         ]
        //     },
        //     {
        //         "task_id": 3,
        //         "task_name": "멀코프 과제",
        //         "subtask_list": [
        //             {"subtask_name": "멀코프 과제", "subtask_id": 1}
        //         ]
        //     },
        //     {
        //         "task_id": 4,
        //         "task_name": "기머러 과제",
        //         "subtask_list": [
        //             {"subtask_name": "문제1", "subtask_id": 1},
        //             {"subtask_name": "문제2", "subtask_id": 2}
        //         ]
        //         }
        // ]);
    }, []);
    
    
    
    return (
        <div className={className}>
            <StyledListGroup>
                {taskList.map((task)=>{
                    return (<>
                        <Link to={`/mainPage/${task.task_id}`}>
                            <StyledListGroupItem>
                                <TaskIcon/> 
                                {task.task_name}
                                <CurrentTaskIcon taskId={task.task_id} currentTaskId={currentTaskId}/>
                            </StyledListGroupItem>
                        </Link>
                        <SubtaskListGroup taskId={task.task_id} subtaskList={[...task.subtask_list]}></SubtaskListGroup>
                    </>)
                })}
            </StyledListGroup>
        </div>
    )
})`
    a{
        color:unset;
        text-decoration: unset;
    }
    &>${StyledListGroup}{
        border-top: 1px solid #29303d;
        border-bottom: 1px solid #29303d;
    }
    ${StyledListGroupItem}{
        position:relative;
        padding: 5px 1rem;
    }
    ${StyledListGroupItem}:hover{
        color: #ff595a;
    }
    ${CurrentTaskIcon}{
        position: absolute;
        right: 0.5rem;
        color: #ff595a;
    }
    //positon: fixed;
    width: 15rem;
    height: 100%;
    background-color: #001233;
    color: #efe0ca;
`;