import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 130px;
  margin-top: 15px;

  .image {
    img {
      width: 130px;
      height: 130px;
    }
  }

  .info {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;

    .name {
      cursor: pointer;
      
      &:hover {
        color: red;
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
    }
  }
`