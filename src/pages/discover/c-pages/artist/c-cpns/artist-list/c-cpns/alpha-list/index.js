import React, { memo } from 'react';
import classNames from 'classnames';

import { singerAlphas } from '@/utils/handle-data';

import {
  AlphaListWrapper
} from './style';
import { useState } from 'react';

export default memo(function HYAlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState("-1");

  return (
    <AlphaListWrapper>
      {
        singerAlphas.map((item, index) => {
          const isActive = currentAlpha === item;
          if (item === "0") item = "其他";
          if (item === "-1") item = "热门";
          return (
            <div key={item}
                 className={classNames("item", {"active": isActive})}>
              <a href="/#" onClick={e => setCurrentAlpha(item)}>{item.toUpperCase()}</a>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
})
