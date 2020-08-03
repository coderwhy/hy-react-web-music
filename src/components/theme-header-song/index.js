import React from 'react';
import { useSelector, shallowEqual } from "react-redux";

import {
  HeaderWrapper
} from "./style"
import { memo } from 'react';

export default memo(function HYThemeHeaderSong() {
  // redux
  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual)

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{state.playList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{state.playList.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})
