import styled from 'styled-components';

export const StyledSingleItemCard = styled.article`
  height: 350px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyledSingleItemCardTopPart = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Ensure it fills up space above the button holder */
  gap: 5px;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 9px 9px 0 0;
  object-fit: cover;
`;

export const StyledItemName = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
`;

export const StyledItemDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.7;
`;

export const StyledCategory = styled.p`
  padding: 4px;
  background-color: #d1e4fd;
  color: #528deb;
  font-weight: 600;
  border-radius: 4px;
  width: max-content;
`;

export const StyledButtonHolder = styled.div`
  border-top: 2px solid lightgray;
  padding: 10px;
  text-align: center;
`;
