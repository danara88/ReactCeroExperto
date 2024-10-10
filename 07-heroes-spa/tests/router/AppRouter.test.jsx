import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('AppRouter', () => {
  test('should render log in page if user is not logged in', () => {
    // Arrange
    const contextValue = {
      authState: {
        logged: false,
        user: null,
      },
    };
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // Assert
    expect(screen.getAllByText('Login').length).toBeGreaterThan(1);
  });
  test('should render heroes routes if user is logged in', () => {
    // Arrange
    const contextValue = {
      authState: {
        logged: true,
        user: {
          id: 'ABC',
          name: 'test',
        },
      },
    };
    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // Assert
    expect(screen.getByText('Marvel')).toBeTruthy();
  });
});
