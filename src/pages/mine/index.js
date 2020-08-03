import React, { memo } from 'react';

import { MineWrapper } from './style';

export default memo(function HYMine() {
  return (
    <MineWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/#">立即登录</a>
        </div>
      </div>
    </MineWrapper>
  )
})
