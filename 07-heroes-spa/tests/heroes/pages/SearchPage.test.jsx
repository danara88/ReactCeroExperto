import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('SearchPage', () => {
  beforeEach(() => jest.clearAllMocks());

  test('should display component with default values', () => {
    // Arrange
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    // Assert
    expect(container).toMatchSnapshot();
  });

  test('should display batman data and the input with query string value', () => {
    // Arrange
    const heroName = 'batman';
    render(
      <MemoryRouter initialEntries={['/search?q=' + heroName]}>
        <SearchPage />
      </MemoryRouter>
    );
    const searchInput = screen.getByRole('textbox');
    const heroImage = screen.getByRole('img');
    const alert = screen.getByTestId('alert');
    // Assert
    expect(searchInput.value).toBe(heroName);
    expect(heroImage.src).toContain('/heroes/dc-batman.jpg');

    // Dos formas de evaluar
    // Primera opcion
    expect(alert.style._values).toEqual({ display: 'none' });

    // Segunda opcion
    expect(alert.style.display).toBe('none');
  });

  test('should display error if a heroe was not found', () => {
    // Arrange
    const heroName = 'NotExistingHero';
    render(
      <MemoryRouter initialEntries={['/search?q=' + heroName]}>
        <SearchPage />
      </MemoryRouter>
    );
    const errorAlert = screen.getByTestId('error-alert');
    // Assert
    expect(errorAlert.style.display).toBe('');
  });

  test('should navigate to new screen', () => {
    // Arrange
    const inputValue = 'superman';
    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );
    const form = screen.getByTestId('search-form');
    const searchInput = screen.getByRole('textbox');
    // Act
    fireEvent.change(searchInput, { target: { name: 'searchText', value: inputValue } });
    fireEvent.submit(form);
    // Assert
    expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
