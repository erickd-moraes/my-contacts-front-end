import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  font-size: 16px;
  padding: 0 16px;
  background: #FFF;
  border-radius: 4px;
  border: 2px solid #FFF;
  outline: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: border-color .2s ease-in;
  appearance: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
