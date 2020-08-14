import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import HYThemeHeaderNormal from '@/components/theme-header-normal';
import HYAlphaList from './c-cpns/alpha-list';
import {
  ArtistListWrapper
} from './style';

export default memo(function HYArtistList() {
  const { currentType } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <HYThemeHeaderNormal title={currentType.name} />
      <HYAlphaList/>
    </ArtistListWrapper>
  )
})
