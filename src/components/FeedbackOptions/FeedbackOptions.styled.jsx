import styled from '@emotion/styled';

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #1a1a1a;
  border-radius: 7px;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;

  min-width: 0;
  outline: none;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  :disabled {
    pointer-events: none;
  }

  :hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
