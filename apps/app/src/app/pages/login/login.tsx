import { Button, ButtonGroup, ButtonVariant } from '@starkiller/base';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { User } from '../../types/user';

/* eslint-disable-next-line */
export interface LoginProps {
  loginCallback: (user: User) => void;
}

export function Login({ loginCallback }: LoginProps) {
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
  };

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    if (currentUser) {
      loginCallback(currentUser);
      navigate('/');
    }
  });

  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Login</h1>
          <ButtonGroup>
            <Button id="login" onClick={handleLogin}>
              Login
            </Button>
            <Button
              id="cancel"
              variant={ButtonVariant.Secondary}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default Login;
