import React, { memo } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router"

import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';

export default memo(function HYMain() {
  return (
    <div>
      <HashRouter>
        <HYAppHeader />
        {renderRoutes(routes)}
        <HYAppFooter />
      </HashRouter>
    </div>
  )
})
