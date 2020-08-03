import React, { useState, memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getSongList } from "../../store/actionCreators";

import { Pagination } from 'antd';
import HYThemeCover from '@/components/theme-cover';
import {
  SongListWrapper
} from "./style";

export default memo(function HYSongsList() {
  // hooks
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { categorySongs } = useSelector(state => ({
    categorySongs: state.getIn(["songs", "categorySongs"])
  }), shallowEqual);
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;
  const dispatch = useDispatch();

  // render function
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === 'next') {
      return <button className="control next">上一页 &gt;</button>;
    }
    return originalElement;
  }

  function onPageChange(page, pageSize) {
    setCurrentPage(page);
    dispatch(getSongList(page));
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              <HYThemeCover info={item} key={item.id} right="30px" />
            )
          })
        }
      </div>
      <Pagination className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        pageSize={35}
        total={total}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange} />
    </SongListWrapper>
  )
})
