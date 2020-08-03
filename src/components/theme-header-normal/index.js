import React, {memo} from 'react';

import {
  HeaderWrapper
} from "./style";

export default memo(function HYThemeHeaderNormal(props) {
  const { title, rightSlot } = props;

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">
        {rightSlot}
      </div>
    </HeaderWrapper>
  )
})
