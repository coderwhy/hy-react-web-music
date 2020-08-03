import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils'

import {
  CoverWrapper
} from "./style"

export default memo(function HYRadioRankingCover(props) {
  const { radio } = props;

  return (
    <CoverWrapper>
      <a href="/#">
        <img src={getSizeImage(radio.picUrl, 120)} alt="" />
      </a>
      <div className="info">
        <h2 className="title">{radio.name}</h2>
        <div className="nickname sprite_icon2">
          <i className="sprite_icon2 left"></i>
          {radio.dj.nickname}
        </div>
        <div className="count">
          <span className="phase">共{radio.programCount}期</span>
          <span className="subscribe">订阅{radio.subCount}次</span>
        </div>
      </div>
    </CoverWrapper>
  )
})
