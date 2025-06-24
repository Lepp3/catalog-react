import styled from "styled-components";



export const CatalogWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 20px 0px;
gap: 10px;
`

export const StyledCatalogHeader = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
`

export const StyledFilterContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    padding: 20px;
    align-self: flex-end;
`

export const StyledCardHolder = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 20px;
    justify-content: space-around;

`;

export const StyledForm = styled.form`
    display: flex;
    gap: 5px;
    align-items: center;
    
`;


export const StyledSubmitButton = styled.button`
padding: 5px;
border: 1px solid black;
border-radius: 3px;
`