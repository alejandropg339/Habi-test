import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.scss'
import { persistor, store } from './sotre/Store'
import { AppRouter } from './router/AppRouter'
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
