import React, { memo } from 'react';

import HYHotAlbum from './c-cpns/hot-album';
import HYTopAlbum from './c-cpns/top-album';
import {
  AblumWrapper
} from './style';

export default memo(function HYAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <HYHotAlbum/>
      <HYTopAlbum/>
    </AblumWrapper>
  )
})
