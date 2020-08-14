import React, { memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { artistCategories } from '@/services/local-data';

import { CategoryWrapper, CategoryItem } from './style';
import { changeCurrentAreaAction, changeCurrentTypeAction } from '../../store/actionCreators';

export default memo(function HYArtistCategory(props) {

  // redux hooks
  const {currentArea, currentType} = useSelector(state => ({
    currentArea: state.getIn(["artist", "currentArea"]),
    currentType: state.getIn(["artist", "currentType"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // handle function
  const selectArtist = (area, type) => {
    dispatch(changeCurrentAreaAction(area));
    dispatch(changeCurrentTypeAction(type));
  }

  // render jsx
  const renderArtist = (artists, area) => {
    return (
      <div>
        {
          artists.map((item, index) => {
            const isSelect = currentArea === area && currentType.type === item.type;
            return (
              <CategoryItem key={item.name} 
                            className={classNames({"active": isSelect})}>
                <span onClick={e => selectArtist(area, item)}>{item.name}</span>
              </CategoryItem>
            )
          })
        }
      </div>
    )
  }

  return (
    <CategoryWrapper>
      {
        artistCategories.map((item, index) => {
          return (
            <div className="section" key={item.area}>
              <h2 className="title">{item.title}</h2>
              {renderArtist(item.artists, item.area)}
            </div>
          )
        })
      }
    </CategoryWrapper>
  )
})
