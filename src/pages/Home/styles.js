import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 25px;
    background: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 0 16px;
    outline: 0;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray.lighter};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all .2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;

    span {
      font-weight: bold;
      margin-right: 8px;
      color: ${({ theme }) => theme.colors.primary.main};
    }

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform .2s ease-in;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FFF;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  & + & {
    margin-top: 16px;
  }

  .info {

    .contact-name {
      display: flex;
      align-items: center;

      small {
        font-weight: bold;
        text-transform: uppercase;
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray.light};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  .details {
    margin-left: 24px;

    strong {
      display: block;
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      margin-bottom: 8px;
    }
  }
`;
export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  p {
    text-align: center;
    color: ${({ theme }) => theme.colors.gray.light};
    margin-top: 8px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
