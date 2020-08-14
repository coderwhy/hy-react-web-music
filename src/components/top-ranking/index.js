import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getSongDetailAction } from '@/pages/player/store';

import {
  getSizeImage
} from "@/utils/format-utils";

import {
  TopRankingWrapper
} from "./style";

export default memo(function HYTopRanking(props) {
  // props and state
  const { info } = props;
  const tracks = (info.tracks && info.tracks.slice(0, 10)) || [];

  // redux hooks
  const dispatch = useDispatch();

  // handle code
  const playItem = (id) => {
    dispatch(getSongDetailAction(id));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <a href="/abc" className="image_cover">top</a>
        </div>
        <div className="info">
          <h3>{info.name}</h3>
          <div className="operate">
            <a href="/play" className="sprite_02 btn play">播放</a>
            <a href="/favor" className="sprite_02 btn favor">收藏</a>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="name">{item.name}</div>
                <div className="operate">
                  <button className="sprite_02 btn play" onClick={e => playItem(item.id)}></button>
                  <button className="sprite_icon2 btn addto"></button>
                  <button className="sprite_02 btn favor"></button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/abc">查看全部&gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
