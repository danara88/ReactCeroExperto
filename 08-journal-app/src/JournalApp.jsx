import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

/**
 * @constant JournalApp
 * @description Jorunal app component
 */
export const JournalApp = () => {
  return (
    <AppTheme>
      {/* Principal router system */}
      <AppRouter />
      {/* Principal router system */}
    </AppTheme>
  );
};
