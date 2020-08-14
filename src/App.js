import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import HYMain from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <h2>哈哈哈哈</h2>
      <HYMain/>
    </Provider>
  );
}

export default App;
