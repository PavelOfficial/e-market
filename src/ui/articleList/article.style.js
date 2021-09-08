import styled from 'styled-components';

const style = {};

const listSize = '4rem';
const paddingSize = '1rem';

style.Root = styled.li`
  display: flex;
  align-items: center;
  height: ${listSize};
  padding: 0;
  box-sizing: content-box;
  border-bottom: 1px solid ${(p) => p.theme.borderColor};
  color: ${(p) => p.theme.commonFontColor};
`;

style.Picture = styled.img`
  width: ${listSize};
  height: ${listSize};
  object-fit: cover;
`;

style.Name = styled.div`
  padding: 0 ${paddingSize};
  flex-grow: 1;

  max-height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

style.Price = styled.div`
  white-space: nowrap;
  min-width: 4rem;
`;

style.MultiplySign = styled.div`
  padding: 0 ${paddingSize};
  white-space: nowrap;
`;

style.Count = styled.div``;

style.NumberInput = styled.input`
  font-size: 1.1rem;
  width: 3rem;
`;

style.Checkmark = styled.label`
  display: flex;
  min-width: ${listSize};
  height: ${listSize};
  align-items: center;
  justify-content: center;
`;

style.Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

export { style };

export default style;
