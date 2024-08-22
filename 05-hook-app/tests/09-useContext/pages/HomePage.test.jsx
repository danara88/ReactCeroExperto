import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../../../src/09-useContext/pages/HomePage';
import { UserContext } from '../../../src/09-useContext/context/UserContext';

describe('HomePage', () => {
  test('should display the component without the user', () => {
    // Arrange
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    // Act & Assert
    expect(preTag.innerHTML).toBe('null');
    // screen.debug();
  });

  test('should display the component with the user', () => {
    // Arange
    const user = {
      id: 1,
      name: 'Fernando',
    };
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    // Act & Assert
    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
  });
});
