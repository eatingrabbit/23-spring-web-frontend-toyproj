import styled from "styled-components";
import { useState } from "react";

import { TaskCreateForm } from "./task-create-form";

export const TaskCreateButton=styled(({className})=>{
    const [visible, setVisible]=useState(true);
    
    // function ShowTaskCreateForm(){
    //     setVisible(false);
    // }
    
    // 나중에 아이콘으로 대체
    return (<>
        {visible ?
            <div className={className} onClick={()=>{setVisible(!visible)}}>+</div>
            : <TaskCreateForm setVisible={setVisible}></TaskCreateForm>
        }
    </>)
})`
    box-sizing: border-box;
    margin: 0.5rem;
    
    width: calc(100% - 1rem);
    height: 1.5rem;
    background-color: #00091a;
    
    color: #efe0ca;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 5px;
    line-height: 1.2rem;
    
    &:hover{
        background-color: #ff595a;
        cursor: pointer;
    }
`;