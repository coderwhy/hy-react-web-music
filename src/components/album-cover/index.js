import React, { memo } from 'react';

import {
  getSizeImage
} from "@/utils/format-utils";

import {
  AlbumWrapper
} from "./style";


export default memo(function HYAlbumCover(props) {
  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
        <a href="/abc" className="cover sprite_covor">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
})
