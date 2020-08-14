import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSimiSongAction } from '../../store/actionCreators';

import HYThemeHeaderPlayer from '@/components/theme-header-player';
import { RelevantWrapper } from './style';

export default memo(function HYRelevant() {
  const { simiSongs } = useSelector(state => ({
    simiSongs: state.getIn(["player", "simiSongs"])
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimiSongAction());
  }, [dispatch]);

  return (
    <RelevantWrapper>
      <HYThemeHeaderPlayer title="相似歌曲" />
      <div className="songs">
        {
          simiSongs.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <div className="info">
                  <div className="title">
                    <a href="#/">{item.name}</a>
                  </div>
                  <div className="artist">
                    <a href="#/">{item.artists[0].name}</a>
                  </div>
                </div>
                <div className="operate">
                  <button className="item sprite_icon3 play"></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </RelevantWrapper>
  )
})
