import React, { useEffect, memo } from 'react';
import classNames from "classnames";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getSizeImage } from "@/utils/format-utils";
import {
  changeCurrentIndex,
  getRanking
} from "../../store/actionCreators"

import {
  TopRankingWrapper
} from "./style";

export default memo(function HYTopRanking() {
  // redux
  const state = useSelector(state => ({
    topList: state.getIn(["ranking", "topList"]),
    currentIndex: state.getIn(["ranking", "currentIndex"])
  }), shallowEqual);
  const currentIndex = state.currentIndex;
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    const id = (state.topList[currentIndex] && state.topList[currentIndex].id);
    if (!id) return;
    dispatch(getRanking(id))
  }, [state, dispatch, currentIndex])

  // handle function
  const hanldeItemClick = (index) => {
    dispatch(changeCurrentIndex(index));
    const id = state.topList[currentIndex].id;
    dispatch(getRanking(id))
  }

  return (
    <TopRankingWrapper>
      {
        state.topList.map((item, index) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classNames("item", { "active": index === currentIndex })}
                onClick={e => hanldeItemClick(index)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankingWrapper>
  )
})
