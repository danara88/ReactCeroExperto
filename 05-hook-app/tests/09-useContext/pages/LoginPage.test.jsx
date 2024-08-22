import { describe, test, expect, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../../src/09-useContext/pages/LoginPage';

describe('LoginPage', () => {
  test('should display the user in the component', () => {
    // Arrange
    const userMock = {
      id: 123456,
      name: 'Test',
      email: 'test@gmail.com',
    };
    render(
      <UserContext.Provider value={{ user: userMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preElement = screen.getByLabelText('pre');
    // Act & Assert
    expect(preElement.innerHTML).toContain(`${userMock.id}`);
    expect(preElement.innerHTML).toContain(`${userMock.name}`);
    expect(preElement.innerHTML).toContain(`${userMock.email}`);
  });

  test('should call setUser when on click', () => {
    // Arrange
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const buttonElement = screen.getByRole('button');
    // Act
    fireEvent.click(buttonElement);
    // Assert
    expect(setUserMock).toHaveBeenCalledWith({
      id: 1234,
      name: 'Daniel',
      email: 'daniel@test.com',
    });
  });
});
