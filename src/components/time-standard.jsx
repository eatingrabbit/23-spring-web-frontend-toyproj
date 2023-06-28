import styled from "styled-components";

const TimeStandardRow=styled.div`
    padding-left: 0.4rem;
    color: #ff595a;
    border-bottom: 1px solid #ddd;
    width: 100vw;
    height: 3rem;
    line-height: 3rem;
    
    position: absolute;
    top: calc(${(props)=>{return props.yPos}}rem * 3 + 3rem);   //DateTextBlock 3rem, 한칸당 3rem
`

export const TimeStandard=styled(({className})=>{
    
    const dayStartTime=6;
    const dayEndtime=24;
    
    const TimeStandardTextBlockRendering=()=>{
        const result=[];
        for(var TimeStandardContent=dayStartTime; TimeStandardContent<=dayEndtime;TimeStandardContent++){
            result.push(
                <TimeStandardRow yPos={TimeStandardContent-dayStartTime}>
                    {/* {TimeStandardText < 12 ? "a.m." : "p.m."} */}
                    {/* {TimeStandardText<=12 ? TimeStandardText : TimeStandardText-12} */}
                    {TimeStandardContent}
                </TimeStandardRow>
            )
        }
        return result;
    }
    return <div className={className}>
        {TimeStandardTextBlockRendering()}
    </div>
})`
    width: 10rem;
    height: 100%;
    //background-color: #efe0ca;
    position: sticky;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 1;
`