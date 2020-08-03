import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTopAlbumsAction } from '../../store/actionCreators';

import HYThemeHeaderNormal from "@/components/theme-header-normal";
import HYAlbumCover from "@/components/album-cover";
import {
  TopAlbumWrapper
} from './style';

export default memo(function HYTopAlbum() {
  const { topAlbums } = useSelector(state => ({
    topAlbums: state.getIn(["album", "topAlbums"])
  }))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAlbumsAction());
  }, [dispatch]);

  return (
    <TopAlbumWrapper>
      <HYThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {
          topAlbums.map((item, index) => {
            return <HYAlbumCover size={"130px"} 
                                 width={"153px"} 
                                 bgp={"-845px"}
                                 key={item.id} 
                                 info={item}/>
          })
        }
      </div>
    </TopAlbumWrapper>
  )
})
