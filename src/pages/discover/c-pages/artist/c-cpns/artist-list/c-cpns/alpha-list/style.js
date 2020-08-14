import styled from 'styled-components';

export const AlphaListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .item {
    padding: 1px 4px;
    border-radius: 3px;
    a {
      font-size: 14px;
      color: #333;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .active {
    background-color: #c20c0c;
    a {
      color: #fff;
    }
  }
`