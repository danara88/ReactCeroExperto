import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid2, Link, TextField } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';

/**
 * @constant LoginPage
 * @description Log in page component
 */
export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid2 container>
          {/* Email address field */}
          <Grid2 item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField
              label="Email address"
              type="email"
              placeholder="johndoe@email.com"
              fullWidth
            />
          </Grid2>
          {/* Email address field */}

          {/* Password field */}
          <Grid2 item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField label="Password" type="pasword" placeholder="Password" fullWidth />
          </Grid2>
          {/* Password field */}

          {/* Forms buttons */}
          <Grid2 container size={12} spacing={2} sx={{ my: 2 }}>
            <Grid2 item="true" size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid2>

            <Grid2 item="true" size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth startIcon={<Google />}>
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
