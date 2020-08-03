import styled from 'styled-components';

export const TopRankingWrapper = styled.div`
  padding: 25px 0;

  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    color: #000;
    font-family: simsun;
  }

  .item {
    height: 62px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    &:hover, &.active {
      background-color: #e6e6e6;
    }

    img {
      width: 40px;
      height: 40px;
    }

    .info {
      margin-left: 10px;

      .name {
        color: #000;
      }

      .update {
        margin-top: 5px;
        color: #999;
      }
    }
  }
`