import { useState, ReactNode } from 'react';
import UserContext, { UserInfo } from './UserContext';

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: 'default',
    gender: '',
    mood: '',
    image: '',
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
