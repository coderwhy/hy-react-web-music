import React, { memo } from 'react';

import HYPlayerInfo from './c-cpns/player-info';
import HYPlayerComment from './c-cpns/player-comment';
import HYPlayerSongs from './c-cpns/player-songs';
import HYPlayerRelevant from './c-cpns/player-relevant';
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';

export default memo(function HYPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <HYPlayerInfo/>
          <HYPlayerComment/>
        </PlayerLeft>
        <PlayerRight>
          <HYPlayerSongs/>
          <HYPlayerRelevant/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
