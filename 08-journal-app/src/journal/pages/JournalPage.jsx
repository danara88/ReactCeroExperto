import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';

/**
 * @constant JournalPage
 * @description Journal page component
 */
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* Nothing selected */}
      {/* <NothingSelectedView /> */}
      {/* Nothing selected */}

      {/* Note view */}
      <NoteView />
      {/* Note view */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
