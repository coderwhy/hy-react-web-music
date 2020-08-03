import React, { memo } from 'react';

import HYRadioCategory from './c-cpns/radio-category';
import HYRadioRecommend from './c-cpns/radio-recommend';
import HYRadioRanking from './c-cpns/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function HYDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <HYRadioCategory />
      <HYRadioRecommend />
      <HYRadioRanking />
    </DjRadioWrapper>
  )
})
