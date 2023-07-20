import styled from "styled-components";

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
export const TaskCreateForm=styled(({className, setVisible})=>{
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
            <SubmitButton onClick={()=>{setVisible(true)}}>취소하기</SubmitButton>
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
