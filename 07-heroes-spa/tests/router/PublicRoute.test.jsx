import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('PublicRoute', () => {
  test('should redirect to / if user is already logged', () => {
    // Arrange
    const contextValue = {
      authState: {
        logged: true,
        user: {
          id: 'ABC',
          name: 'Test',
        },
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Public route</h1>
                </PublicRoute>
              }
            />
            <Route path="/" element={<h1>Inner App Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // Assert
    expect(screen.getByText('Inner App Page')).toBeTruthy();
  });

  test('should render children if user is not logged', () => {
    // Arrange
    const contextValue = {
      authState: {
        logged: false,
        user: null,
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    // Assert
    expect(screen.getByText('Public route')).toBeTruthy();
  });
});
