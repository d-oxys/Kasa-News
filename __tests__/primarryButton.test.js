import { render, fireEvent } from '@testing-library/react';
import PrimaryButton from '../src/components/buttons/primaryButton';

describe('PrimaryButton', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<PrimaryButton text='Submit' />);
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<PrimaryButton text='Submit' onClick={handleClick} />);
    fireEvent.click(getByText('Submit'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows spinner when pending', () => {
    const { getByTestId } = render(<PrimaryButton text='Submit' pending={true} />);
    expect(getByTestId('spinner')).toBeInTheDocument();
  });
});
