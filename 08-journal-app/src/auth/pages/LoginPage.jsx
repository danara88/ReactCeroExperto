import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Google } from '@mui/icons-material';
import { Button, Grid2, Link, TextField } from '@mui/material';

import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import {
  authStatus,
  checkingAuthentication,
  startEmailPasswordSignIn,
  startGoogleSignIn,
} from '../../store/auth';

/**
 * @constant LoginPage
 * @description Log in page component
 */
export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === authStatus.LOADING, [status]);

  const { email, password, onInputChange } = useForm({
    email: 'danielarandamar88@gmail.com',
    password: '123456',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startEmailPasswordSignIn({ email, password }));
  };

  const handleGoogleSignIn = (event) => {
    console.log('GOOGLE SIGN IN');
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Grid2 container>
          {/* Email address field */}
          <Grid2 item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Email address"
              type="email"
              placeholder="johndoe@email.com"
              fullWidth
              onChange={onInputChange}
              name="email"
              value={email}
            />
          </Grid2>
          {/* Email address field */}

          {/* Password field */}
          <Grid2 item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              onChange={onInputChange}
              name="password"
              value={password}
            />
          </Grid2>
          {/* Password field */}

          {/* Forms buttons */}
          <Grid2 container size={12} spacing={2} sx={{ my: 2 }}>
            <Grid2 item="true" size={{ xs: 12, sm: 6 }}>
              <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid2>

            <Grid2 item="true" size={{ xs: 12, sm: 6 }}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                startIcon={<Google />}
                onClick={handleGoogleSignIn}
              >
                Google
              </Button>
            </Grid2>
          </Grid2>
          {/* Forms buttons */}

          <Grid2 container direction="row" justifyContent="end" size={12}>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create account
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
