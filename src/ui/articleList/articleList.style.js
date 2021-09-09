import styled from 'styled-components';

export const style = {};

style.Root = styled.ul`
  padding: 0 0 ${p => (p.cartExists ? '8rem' : '4rem')} 0;
  display: block;
  margin: 0;
`;

style.LoaderBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  text-align: center;
`;

style.Loader = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
`;

export default style;
