import React, { useEffect, useRef, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import classnames from 'classnames';

import {
  getRadioCategories,
  changeCurrentIdActio
} from "../../store/actionCreators";

import { Carousel } from 'antd';
import {
  CategoryWrapper,
  CategoryContent,
  CategoryItemImage
} from "./style";

const PAGE_SIZE = 16;

export default memo(function HYRadioCategory() {
  // redux
  const dispatch = useDispatch();
  const { categories, currentId } = useSelector(state => ({
    categories: state.getIn(["djradio", "categories"]),
    currentId: state.getIn(["djradio", "currentId"])
  }), shallowEqual);

  // data handle
  const page = Math.ceil(categories.length / PAGE_SIZE) || 1;

  // hooks
  useEffect(() => {
    dispatch(getRadioCategories());
  }, [dispatch]);
  const carouselRef = useRef();

  // handle function
  function getSize(index) {
    return index * PAGE_SIZE > categories.length ? index * PAGE_SIZE : categories.length;
  }

  return (
    <CategoryWrapper>
      <div className="arrow arrow-left" onClick={e => carouselRef.current.prev()}></div>
      <CategoryContent>
        <Carousel dots={{className: "dots"}} ref={carouselRef}>
          {
            Array(page).fill(0).map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {
                    categories.slice(index * PAGE_SIZE, getSize(index + 1)).map((item, indey) => {
                      return (
                        <div key={item.id} 
                             onClick={e => dispatch(changeCurrentIdActio(item.id))}
                             className={classnames("category-item", {"active": currentId === item.id})}>
                          <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                          <span>{item.name}</span>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </CategoryContent>
      <div className="arrow arrow-right" onClick={e => carouselRef.current.next()}></div>
    </CategoryWrapper>
  )
})
