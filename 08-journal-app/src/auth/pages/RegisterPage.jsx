import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';

/**
 * @constant RegisterPage
 * @description Register page component
 */
export const RegisterPage = () => {
  return (
    <AuthLayout title="Create Account">
      <form>
        <Grid2 container>
          {/* Complete name field */}
          <Grid2 item="true" size={{ xs: 12 }} sx={{ mt: 2 }}>
            <TextField label="Complete Name" type="text" placeholder="John Doe" fullWidth />
          </Grid2>
          {/* Complete name field */}

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
            <Grid2 item="true" size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
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
