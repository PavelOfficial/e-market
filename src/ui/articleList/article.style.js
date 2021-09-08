import styled from 'styled-components';

export const style = {};

const listSize = '4rem';
const paddingSize = '0.5rem';

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
`;

style.Name = styled.div`
  flex-basis: 15rem;
  flex-grow: 2;
  max-height: ${listSize};
  text-overflow: ellipsis;
  padding: 0 ${paddingSize};
`;

style.Price = styled.div`
  white-space: nowrap;
`;

style.MultiplySign = styled.div`
  padding: 0 ${paddingSize / 2};
  white-space: nowrap;
`;

style.Count = styled.div``;

style.Checkmark = styled.div``;

style.Checkbox = styled.input``;

export default style;
