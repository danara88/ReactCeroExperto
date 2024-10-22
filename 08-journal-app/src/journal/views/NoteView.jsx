import { SaveOutlined } from '@mui/icons-material';
import { Grid2, Typography, Button, TextField } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <>
      <Grid2
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
      >
        <Grid2 item="true">
          <Typography fontSize={40} fontWeight="light">
            August 28, 2023
          </Typography>
        </Grid2>
        <Grid2 item="true">
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid2>
      </Grid2>
      <Grid2 container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Insert a title"
          label="Title"
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="What happened today?"
          multiline
          minRows={5}
        />
      </Grid2>

      {/* Gallery images */}
      <ImageGallery />
      {/* Gallery images */}
    </>
  );
};
