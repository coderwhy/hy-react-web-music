import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import HYMain from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <HYMain/>
    </Provider>
  );
}

export default App;
