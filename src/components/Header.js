import React,{useState} from 'react';
import styled from 'styled-components';
import {selectCars} from '../features/car/carSlice.js';
import {useSelector} from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus,setBurgerStatus]=useState(false);
    const cars=useSelector(selectCars);
    return (
        <Container>
            <a href='/'><img src='./images/logo.svg' alt='tesla logo' /></a>
            <Menu>
                {cars && cars.map((car,index)=>{
                    return(
                        <a href='/' key={index}>{car}</a> 
                    );
                })}
            </Menu>

            <RightMenu>
            <a href='/'>Shop</a> 
            <a href='/'>Tesla account</a>
            <CustomMenu onClick={()=>{setBurgerStatus(true)}}/>

            </RightMenu>

            <BurgerNav open={burgerStatus}>
                <CustomClose onClick={()=>{setBurgerStatus(false)}}/>
                {cars && cars.map((car,index)=>{
                    return(
                        <li key={index}> <a href='/'>{car}</a></li> 
                    );
                })}
            </BurgerNav>
        </Container>
    )
}

export default Header;

const Container=styled.div`
    
    min-height:60px;
    position: fixed;
    top:0;
    left:0;
    right:0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 20px;
    z-index:1;
`;

const Menu=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex:1;
    a{
            font-weight:600;
            text-transform: uppercase;
            padding:0 10px;
            flex-wrap: nowrap;
    } 
    @media(max-width:768px){
        display:none;
    }  
`;

const RightMenu=styled.div`
        display:flex;
        align-items: center;
        a{
            font-weight:600;
            text-transform: uppercase;
            margin-right:15px;
            flex-wrap: nowrap;
        } 
`;

const CustomMenu=styled(MenuIcon)`
    cursor:pointer;
`;

const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
width:300px;
z-index:9;
background-color: #ffffff;
list-style: none;
text-align:start;
padding:20px;
transition:all 175ms ease-in;
transform:${(props)=>props.open?'translateX(0)' :'translateX(100%)' };
display:flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-end;
    li{
        width:100%;
        
        padding:16.5px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }
`;

const CustomClose=styled(CloseIcon)`
cursor:pointer;
margin-bottom:15px;
`;

