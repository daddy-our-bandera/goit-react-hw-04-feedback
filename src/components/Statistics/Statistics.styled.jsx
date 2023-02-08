import styled from '@emotion/styled';
export const StateBox = styled.div``;
export const StateList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  justify-content: space-around;
  display: flex;

  :last-child {
    padding: 20px 50px;
    justify-content: space-between;
    margin-top: 30px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;

export const Name = styled.span``;

export const State = styled.span`
  display: inline-block;
  font-weight: 700;
`;
