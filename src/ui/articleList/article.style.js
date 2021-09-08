import styled from 'styled-components';

export const style = {};

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
`;

style.MultiplySign = styled.div`
  padding: 0 ${paddingSize / 2};
  white-space: nowrap;
`;

style.Count = styled.div``;

style.Checkmark = styled.div``;

style.Checkbox = styled.input``;

export default style;
