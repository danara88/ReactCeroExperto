import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from '../../src/routes';
describe('MainApp', () => {
  test('should display home page when route is /', () => {
    // Arrange
    const router = createMemoryRouter(routesConfig, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    // Act & Assert
    expect(screen.getByText('HomePage'));
  });

  test('should display home page when route is /home', () => {
    // Arrange
    const router = createMemoryRouter(routesConfig, { initialEntries: ['/home'] });
    render(<RouterProvider router={router} />);
    // Act & Assert
    expect(screen.getByText('HomePage'));
  });

  test('should display login page when route is /login', () => {
    // Arrange
    const router = createMemoryRouter(routesConfig, { initialEntries: ['/login'] });
    render(<RouterProvider router={router} />);
    // Act & Assert
    expect(screen.getByText('LoginPage'));
  });

  test('should display about page when route is /about', () => {
    // Arrange
    const router = createMemoryRouter(routesConfig, { initialEntries: ['/about'] });
    render(<RouterProvider router={router} />);
    // Act & Assert
    expect(screen.getByText('AboutPage'));
  });
});
