import styled from 'styled-components';

export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;

  .name {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
  }

  img {
    width: 150px;
    height: 150px;
  }

  p {
    color: #666;
  }
`