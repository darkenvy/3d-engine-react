import styled from 'styled-components';

const Styles = styled.div`
  canvas,
  img {
    image-rendering: optimizeSpeed;
    image-rendering: -moz-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
    width: 848px;
    height: 480px;
    border: 1px solid #000000;
  }
`;

export default Styles;
