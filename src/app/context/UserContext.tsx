import { createContext } from 'react';

export interface UserInfo {
  name: string;
  gender: string;
  mood: string;
  image: string;
}

interface UserContextType {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
