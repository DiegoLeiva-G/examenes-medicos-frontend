import React, { createContext, useState, type ReactNode, useEffect, useCallback, use } from 'react';
import { type INotificationProps, Notification } from '../../features';

interface NotificationContextType {
  setNotification: (notification: Omit<INotificationProps, 'onCLoseNotification'> | null) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<INotificationProps | null>(null);

  const handleOnCloseNotification = useCallback(() => {
    setNotification(null);
  }, []);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        handleOnCloseNotification();
      }, 4000);
    }
  }, [handleOnCloseNotification, notification]);

  return (
    <NotificationContext value={{ setNotification }}>
      {notification && <Notification {...notification} onCLoseNotification={handleOnCloseNotification} />}
      {children}
    </NotificationContext>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotification = () => {
  const context = use(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
