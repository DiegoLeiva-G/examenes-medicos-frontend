import React, { createContext, useState, type ReactNode, use } from 'react';
import { type UserEntity } from '../../features';

interface IUserData {
  id: UserEntity['id'];
  username: UserEntity['username'];
}

interface UserContextType {
  userData: IUserData | null;
  setUserData: (userData: IUserData | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  return <UserContext value={{ userData, setUserData }}>{children}</UserContext>;
};

export const useUser = () => {
  const context = use(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
