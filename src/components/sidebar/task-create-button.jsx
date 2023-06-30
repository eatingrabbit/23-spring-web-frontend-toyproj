import styled from "styled-components";
import { useState } from "react";

const ButtonWrapper=styled.div`
    display: flex;
    justify-content: space-around;
`;
const SubmitButton=styled.div`
    color: #efe0ca;
    text-align: center;
    width: 4.5rem;
    height: 1.5rem;
    background-color: #ff595a;
    cursor: pointer;
    border: 2px solid #efe0ca;
`;
const TaskCreateForm=styled(({className})=>{
    return( 
    <form className={className}>
        <div>
            <label>소요시간<br/></label>
            <input type="number"></input> h
            <input type="number"></input> m
        </div>
        <div>
            <label>데드라인<br/></label>
            <input type="date"></input>
            <input type="time"></input>
        </div>
        <ButtonWrapper>
            <SubmitButton onClick={()=>{alert('Task 추가됨')}}>추가하기</SubmitButton>
            <SubmitButton onClick={()=>{}}>취소하기</SubmitButton>
        </ButtonWrapper>
    </form>);
})`
    //margin-top: 2rem;
    background-color: #efe0ca;
    color: #ff595a;
    input{
        display: block;
        width; 5rem;
        border: none;
        border-bottom: 2px solid #ff595a;
        background-color: rgba(0,0,0,0);
    }
    input:focus{
        border: none;
    }
`;

export const TaskCreateButton=styled(({className})=>{
    const [visible, setVisible]=useState(true);
    
    // function ShowTaskCreateForm(){
    //     setVisible(false);
    // }
    
    // 나중에 아이콘으로 대체
    return (<>
        {visible ?
            <div className={className} onClick={()=>{setVisible(!visible)}}>+</div>
            : <TaskCreateForm></TaskCreateForm>
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