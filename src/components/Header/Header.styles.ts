import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavigationContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
background-color: #112d6a;
color: white;
`

export const NavigationList = styled.ul`
display: flex;
gap: 10px;
justify-content: space-around;
`



export const StyledNavigationLink = styled(Link)`
padding: 15px;
border: 1px solid white;
border-radius: 5px;

&:hover{
background-color:white;
color: #112d6a;
}
`