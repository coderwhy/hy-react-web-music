import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { 
  getRadios
} from "../../store/actionCreators";

import HYThemeHeaderNormal from '@/components/theme-header-normal';
import HYRadioRankingCover from '@/components/radio-ranking-cover';
import {
  RankingWraper
} from "./style";

export default memo(function HYRadioRanking() {
  // redux
  const { currentId, radios } = useSelector(state => ({
    currentId: state.getIn(["djradio", "currentId"]),
    radios: state.getIn(["djradio", "radios"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadios(currentId, 0))
  }, [dispatch, currentId]);

  return (
    <RankingWraper>
      <HYThemeHeaderNormal title="电台排行榜"/>
      <div className="ranking-list">
        {
          radios.map((item, index) => {
            return (<HYRadioRankingCover key={item.id} radio={item}/>)
          })
        }
      </div>
    </RankingWraper>
  )
})
