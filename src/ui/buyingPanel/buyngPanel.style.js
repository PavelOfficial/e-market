import styled from 'styled-components';

const style = {};

style.Root = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  height: 4rem;
  box-sizing: content-box;
  border-top: 1px solid ${(p) => p.theme.borderColor};
`;

style.Text = styled.div`
  max-width: 40rem;
`;

style.ButtonBox = styled.div`
  width: 10rem;
  max-width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

style.Button = styled.button`
  padding: 0.6rem;
  font-size: 1.2rem;
  background: ${(p) => p.theme.themeColor};
  color: ${(p) => p.theme.inverseFontColor};
  outline: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export { style };

export default style;
