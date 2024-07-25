import { Main } from './main.component';
import { render, screen } from '@testing-library/react';

describe('Main Component', () => {
  it('renders a heading', () => {
    render(<Main title="teste" />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
