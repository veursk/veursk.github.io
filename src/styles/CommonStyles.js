import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  background-color: ${(props) => (props.primary ? "#8E9FFF" : "#fff")};
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  margin: 10px auto;
  cursor: pointer;
  display: block;

  &:hover {
    opacity: 0.9;
  }
`;

export const Section = styled.section`
  width: 100%;
  margin: 40px 0;
  padding: 20px 0;
  border-top: 1px solid #eee;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
`;
