import styled from "styled-components";


export const CartContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 5px;
border-radius: 6px;
`;


export const ClearCartButton = styled.button`
padding: 5px;
border-radius: 5px;
background-color: red;
color: white;

&:hover{
background-color: darkred;

}
`