import { StarOutline } from '@mui/icons-material';
import { Grid2, Typography } from '@mui/material';

/**
 * @constant NothingSelectedView
 * @description Display component view when there is nothing selected
 */
export const NothingSelectedView = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
      <Grid2 item="true" xs={12}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid2>
      <Grid2 item="true" xs={12}>
        <Typography color="white" variant="h5">
          Select or add a new post
        </Typography>
      </Grid2>
    </Grid2>
  );
};
