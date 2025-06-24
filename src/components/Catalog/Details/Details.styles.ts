import styled from "styled-components";


export const DetailsWrapper = styled.div`
width: 60%;
margin: 0 auto;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
text-align: center;
`;

export const StyledItemHeading = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`;


export const StyledItemDescription = styled.p`
    font-size: 1.2rem;
`;

export const StyledItemImage = styled.img`
    height: 550px;
    max-height: 550px;
    width: 500px;
    max-width: 500px;
    border-radius: 8px;
    align-self: center;
`;


export const StyledAddToCartButton = styled.button`
    padding: 10px;
    background-color: #528deb;
    color: white;
    border-radius: 6px;
    text-align: center;
    width: max-content;
    align-self: center;

`