import React from 'react';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './pages/MainPage'
import { store } from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}

export default App;
