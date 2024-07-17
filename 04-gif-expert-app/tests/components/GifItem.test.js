import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('GifItem', () => {
  const title = 'Test';
  const url = 'http://test.com/';

  test('should evaluate snap shot', () => {
    // Act
    const { container } = render(<GifItem title={title} url={url} />);
    // Assert
    expect(container).toMatchSnapshot();
  });

  test('should display correct image form URL and correct title', () => {
    // Arrange
    render(<GifItem title={title} url={url} />);
    // Act
    const { src, alt } = screen.getByRole('img');
    // Assert
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test('should display the title in the UI', () => {
    // Arrange
    render(<GifItem title={title} url={url} />);
    // Act
    const result = screen.getByText(title);
    // Assert
    expect(result).toBeTruthy();
  });
});
