import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: 4rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-900"]};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
