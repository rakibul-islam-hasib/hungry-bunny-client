import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import "primereact/resources/primereact.min.css";
import { Provider } from 'react-redux'
import store from './redux/store'
import AuthState from './context/AuthState'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthState>
          <RouterProvider router={router} />
        </AuthState>
      </Provider>
    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
