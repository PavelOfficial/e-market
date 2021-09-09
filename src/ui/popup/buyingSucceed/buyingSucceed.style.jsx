import styled from 'styled-components';

const style = {};

style.Root = styled.div`
  position: relative;
  z-index: 1;
  background: ${p => p.theme.sheetColor};
  border-radius: 7px;
  padding: 1.5rem;
  margin: 0.5rem;
  max-width: 35rem;
  text-align: center;
`;

style.Header = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

style.Text = styled.div`
  padding: 1rem 0;
`;

style.Paragraph = styled.p``;

style.ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;

style.Button = styled.button`
  display: inline-block;
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 4px;
  margin: 0 1rem;
  cursor: pointer;
`;

style.ButtonSucceed = styled(style.Button)`
  background: ${p => p.theme.themeColor};
  color: ${p => p.theme.inverseFontColor};
`;

style.ButtonCancel = styled(style.Button)`
  background: ${p => p.theme.commonColor};
  color: ${p => p.theme.inverseFontColor};
`;

export { style };

export default style;
