import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function Section({title,description,backgroundImg,leftBtnText,rightBtnText}){
    return <Wrap bgImg={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText> 
            </Fade>
            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                   {
                        rightBtnText
                            &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src='./images/down-arrow.svg'/>
                </Fade>
            </Buttons>
        
        </Wrap>
}

export default Section;

const Wrap=styled.section`
    width:100vw;
    height:100vh;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image:${props=>`url('./images/${props.bgImg}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const ItemText=styled.div`
    padding-top: 15vh;
    text-align: center;
`;

//Buttons is the container for ButtonGroup , LeftButton , RightButton & DownArrow
const Buttons=styled.div``;

const ButtonGroup=styled.div`
display:flex;
margin-bottom: 30px;
@media (max-width:768px){
    flex-direction:column;
}
`;

const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
color:#ffffff;
height:40px;
width:256px;
display:flex;
justify-content: center;
align-items: center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`;

const RightButton=styled(LeftButton)`
background-color: #ffffff;
opacity: 0.65;
color:#000000;
`;

const DownArrow=styled.img`
height:40px;
overflow-y:hidden;
cursor:pointer;
animation:animateDown infinite 1.5s;
`;


