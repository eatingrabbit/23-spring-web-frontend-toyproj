import {useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { Toolbar } from "../components/header";
import { TaskListSidebar } from "../components/task-list-sidebar";
import { DateBlockList } from "../components/date-block-list-item";

const Wrapper=styled.div`
    height: calc(100vh - 2rem);
    display: flex;
`;

export const MainPage=styled(({className})=>{
    const {taskId}=useParams();
    return(
        <div className={className}>
            <Toolbar></Toolbar>
            <Wrapper>
                <TaskListSidebar></TaskListSidebar>
                <DateBlockList></DateBlockList>
            </Wrapper>
        </div>
    )
})`
    box-sizing: border-box;
    width:100%;
    height:100%;
    margin: 0 auto;
    background-color: #FFF;
`;