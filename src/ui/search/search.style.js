import styled from 'styled-components';

const style = {};

const size = '4rem';

style.Root = styled.div`
  display: flex;
  height: ${size};
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
`;

style.TextInput = styled.input`
  flex-grow: 1;
  height: ${size};
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1.2rem;
  border: none;
  outline: none;
`;

style.Checkmark = styled.label`
  display: flex;
  padding-right: 1rem;
  min-width: ${size};
  height: ${size};
  align-items: center;
  justify-content: center;
`;

style.CheckmarkText = styled.label`
  display: inline-block;
  padding: 0 0.5rem;
  color: ${(p) => p.theme.paleFontColor};
`;

style.Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

export { style };

export default style;
