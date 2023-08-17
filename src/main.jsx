import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import "primereact/resources/primereact.min.css";
import { Provider } from 'react-redux'
import store from './redux/store'
import AuthState from './context/AuthState'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthState>
          <RouterProvider router={router} />
      </AuthState>
    </Provider>
  </React.StrictMode>,
)
