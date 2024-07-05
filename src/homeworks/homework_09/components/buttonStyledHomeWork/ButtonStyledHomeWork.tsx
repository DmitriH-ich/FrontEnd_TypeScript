import styled from '@emotion/styled';

interface ButtonProps {
  disabled: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  align-self: center;
  border-radius: 5px;
  background-color: ${(props) => props.disabled ? '#c4c1c7' : '#ff9925'};
  padding: 6px;
  font-size: 2rem; 
  cursor: pointer;
  margin: 20px; 
`;



export default function ButtonStyledComponent() {
  return (
    <>
    <StyledButton disabled={false}>button is Enabled</StyledButton>
    <StyledButton disabled={true}>button is Disabled</StyledButton>
    </>
  );
}