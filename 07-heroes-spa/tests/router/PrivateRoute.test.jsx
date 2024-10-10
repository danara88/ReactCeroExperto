import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('PrivateRoute', () => {
  test('should redirect to login page if user is not logged in', () => {
    // Arrange
    const contextValue = {
      authState: {
        logged: false,
        user: null,
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <h1>Private page</h1>
                </PrivateRoute>
              }
            />
            <Route path="login" element={<h1>Log in page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // Assert
    expect(screen.getByText('Log in page')).toBeTruthy();
  });

  test('should render children if user is logged in', () => {
    // Arrange
    Storage.prototype.setItem = jest.fn();

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
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Private page</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // Assert
    expect(screen.getByText('Private page')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
  });
});
