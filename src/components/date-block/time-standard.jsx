import styled from "styled-components";

const TimeStandardRow=styled.div`
    border-bottom: 1px solid #ddd;
    width: 100vw;
    height: 3rem;
    
    position: absolute;
    top: calc(${(props)=>{return props.yPos}}rem * 3 + 3rem);   //DateTextBlock 3rem, 한칸당 3rem
`
const TimeStandardNumber=styled.div`
    padding-left: 0.4rem;
    color: #ff595a;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    
    position: absolute;
    top: calc(${(props)=>{return props.yPos}}rem * 3 + 3rem);   //DateTextBlock 3rem, 한칸당 3rem
`

const dayStartTime=6;
const dayEndtime=24;

export const TimeStandardRowList=styled(({className})=>{    
    const TimeStandardRowRendering=()=>{
        const result=[];
        for(var TimeStandardContent=dayStartTime; TimeStandardContent<=dayEndtime;TimeStandardContent++){
            result.push(
                <TimeStandardRow yPos={TimeStandardContent-dayStartTime}></TimeStandardRow>
            )
        }
        return result;
    }
    return <div className={className}>
        {TimeStandardRowRendering()}
    </div>
})`
    height: 100%;
    //background-color: #efe0ca;
    position: sticky;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1;
`

export const TimeStandardNumberList=styled(({className})=>{
    const TimeStandardNumberRendering=()=>{
        const result=[];
        for(var TimeStandardContent=dayStartTime; TimeStandardContent<=dayEndtime;TimeStandardContent++){
            result.push(
                <TimeStandardNumber yPos={TimeStandardContent-dayStartTime}>
                    {/* {TimeStandardText < 12 ? "a.m." : "p.m."} */}
                    {/* {TimeStandardText<=12 ? TimeStandardText : TimeStandardText-12} */}
                    {TimeStandardContent}
                </TimeStandardNumber>
            )
        }
        return result;
    }
    return <div className={className}>
        {TimeStandardNumberRendering()}
    </div>
})`
    height: 100%;
    //background-color: #efe0ca;
    position: sticky;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 5;
`