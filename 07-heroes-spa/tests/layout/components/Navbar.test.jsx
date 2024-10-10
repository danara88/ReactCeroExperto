import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../src/auth';
import { Navbar } from '../../../src/layout/components/Navbar';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // Mock parcial, spread de todos los elementos de react-router-dom
  ...jest.requireActual('react-router-dom'),

  // Hacer el mock de useNavigate
  useNavigate: () => mockUseNavigate,
}));

describe('Navbar', () => {
  const contextValue = {
    authState: {
      logged: true,
      user: {
        id: 'ABC',
        name: 'Test User Name',
      },
    },
    logout: jest.fn(),
  };

  // Buena practica limpiar los mocks cuando usamos jest fucntions
  beforeEach(() => jest.clearAllMocks());

  test('should display the authenticated username', () => {
    // Act
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // Assert
    expect(screen.getByText(contextValue.authState.user.name)).toBeTruthy();
  });

  test('should log out and navigate to log in page when user clicks on log out button', () => {
    // Arrange
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // Act
    const logoutButton = screen.getByRole('button');
    fireEvent.click(logoutButton);
    // Assert
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
