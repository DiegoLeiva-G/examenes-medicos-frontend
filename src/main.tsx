import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { UserProvider } from '@core/contexts/UserContext.tsx';
import { NotificationProvider } from '@core/contexts/NotificationContext.tsx';
import { AntdConfigProvider, ThemeProvider } from '@core/contexts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AntdConfigProvider>
        <UserProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </UserProvider>
      </AntdConfigProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
