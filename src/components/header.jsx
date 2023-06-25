import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export const Toolbar=styled(({className})=>{
    
    //useEffect(()=>{
    //     const fetchTaskList=()=>{
    //         axios.get("*** 전체 task 및 subtask 불러오는 엔드포인트 ***")
    //         .then((result)=>{
    //             setTaskList([...result.result]);
    //         })
    //         .catch((e)=>{
    //             alert(e);
    //         })
    //     }
    //}, []);
    
    return (
        <div className={className}>
            toolbar
        </div>
    )
})`
    width: 100%;
    height: 2rem;
    display:block;
    color: #efe0ca;
    background-color: #001233;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;