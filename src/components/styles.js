import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Card = styled.div`
  background: white;
  padding: 15px;
  margin: 15px 0;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export const Button = styled.button`
  margin: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: ${({ active }) => (active ? "#007bff" : "#e0e0e0")};
  color: ${({ active }) => (active ? "white" : "black")};

  &:hover {
    background: #007bff;
    color: white;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
`;

export const Section = styled.div``;

export const CustomerCard = styled.div`
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  background: ${props => (props.active ? "#4f6ef7" : "#f5f5f5")};
  color: ${props => (props.active ? "white" : "black")};
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${props => (props.active ? "#3b55d1" : "#e6e6e6")};
  }
`;

export const CenteredHeading = styled.h4`
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
  padding-bottom: 6px;
`;