import { Grid2, Typography } from '@mui/material';

/**
 * @constant AuthLayout
 * @description Reusable auth layout (Higher Order Component)
 */
export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: '4' }} // sx = style extended
    >
      <Grid2
        item="true"
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, width: { sm: 450 } }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {/* Render auth layout content here */}
        {children}
        {/* Render auth layout content here */}
      </Grid2>
    </Grid2>
  );
};
