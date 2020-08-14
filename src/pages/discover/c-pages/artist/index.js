import React, { memo } from 'react';

import HYArtistCategory from './c-cpns/artist-category';
import HYArtistList from './c-cpns/artist-list';
import { HYArtistWrapper } from './style';

export default memo(function HYArtist() {
  return (
    <HYArtistWrapper>
      <div className="content wrap-v2">
        <HYArtistCategory/>
        <HYArtistList/>
      </div>
    </HYArtistWrapper>
  )
})
