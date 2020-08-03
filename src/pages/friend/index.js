import React, { memo } from 'react';

import { FriendWrapper } from './style';

export default memo(function HYFriend() {
  return (
    <FriendWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/#">立即登录</a>
        </div>
      </div>
    </FriendWrapper>
  )
})
