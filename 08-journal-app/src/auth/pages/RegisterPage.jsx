import { useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { authStatus } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'The email address is invalid.'],
  password: [(value) => value.length >= 6, 'The password must have minimum 6 characteres.'],
  displayName: [(value) => value.length >= 3, 'The name is required.'],
};

/**
 * @constant RegisterPage
 * @description Register page component
 */
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    displayName,
    email,
    password,
    onInputChange,
    passwordValid,
    displayNameValid,
    emailValid,
    isFormValid,
    formState,
  } = useForm(formData, formValidations);

  const isAuthenticating = useMemo(() => status === authStatus.LOADING, [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Create Account">
      <form onSubmit={handleSubmit}>
        <Grid2 container>
          <Grid2
            item="true"
            size={{ xs: 12 }}
            sx={{ mt: 2 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid2>

          {/* Complete name field */}
          <Grid2 item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Complete Name"
              type="text"
              placeholder="John Doe"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid2>
          {/* Complete name field */}

          {/* Email address field */}
          <Grid2 item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Email address"
              type="email"
              placeholder="johndoe@email.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid2>
          {/* Password field */}

          {/* Forms buttons */}
          <Grid2 container size={12} spacing={2} sx={{ my: 2 }}>
            <Grid2 item="true" size={{ xs: 12 }}>
              <Button type="submit" variant="contained" fullWidth disabled={isAuthenticating}>
                Register
              </Button>
            </Grid2>
          </Grid2>
          {/* Forms buttons */}

          <Grid2 container direction="row" justifyContent="end" size={12}>
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
