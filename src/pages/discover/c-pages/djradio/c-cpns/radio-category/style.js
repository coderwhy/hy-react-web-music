import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -40px;

  .arrow {
    width: 20px;
    height: 30px;
    background-image: url(${require("@/assets/img/radio_slide.png")});
    cursor: pointer;
  }

  .arrow-left {
    margin-left: 15px;
    background-position: 0 -30px;
  }

  .arrow-right {
    margin-right: 15px;
    background-position: -30px -30px;
  }
`

export const CategoryContent = styled.div`
  flex: 1;
  width: 900px;

  .category-page {
    display: flex !important;
    flex-wrap: wrap;
    padding-bottom: 20px;

    .category-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 10px;
      width: 70px;
      height: 70px;
      font-size: 12px;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
      border: 2px solid transparent;

      :hover {
        background-color: #eee;
      }

      &.active {
        color: #C20C0C;
        border: 2px solid #d35757;

        .image {
          background-position: -48px 0;
        }
      }
    }
  }

  .dots {
    bottom: 5px;
    li {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;

      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }

    li.slick-active {
      width: 20px;
      button {
        background-color: #C20C0C;
      }
    }
  }
`

export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.imgUrl});
`