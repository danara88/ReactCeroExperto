import { Box, Toolbar } from '@mui/material';
import { Navbar, Siderbar } from '../components';

const drawerWidth = 280;

/**
 * @constant JournalLayout
 * @description Reusable journal layout (Higher Order Component)
 */
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <Navbar drawerWidth={drawerWidth} />
      {/* Navbar */}

      {/* Sidebar */}
      <Siderbar drawerWidth={drawerWidth} />
      {/* Sidebar */}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}
        <Toolbar />
        {/* Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
