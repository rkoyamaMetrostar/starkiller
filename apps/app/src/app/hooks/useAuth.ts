import { useState } from 'react';
import { User } from '../types/user';
import { user1 } from '../types/__test_data__/user.fixture';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [currentUser, setCurrentUser] = useState<User | null>();

  const login = () => {
    setIsLoggedIn(true);
    setCurrentUser(user1);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return { isLoggedIn, currentUser, login, logout };
};

export default useAuth;
