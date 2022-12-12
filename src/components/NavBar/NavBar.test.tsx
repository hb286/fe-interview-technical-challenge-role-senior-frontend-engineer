import NavBar from './NavBar';
import { renderWithProviders } from '../../utils/test';

describe('NavBar', () => {
  const link1Text = 'Link1';
  const link2Text = 'Link2';
  const link3Text = 'Link3';
  const link1Href = '/link1';
  const link2Href = '/link2';
  const link3Href = '/link3';

  const defaultProps = {
    links: [
      { text: link1Text, href: link1Href },
      { text: link2Text, href: link2Href },
      { text: link3Text, href: link3Href },
    ],
  };

  it('should render NavBar links', () => {
    const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);

    expect(getByText(link1Text)).toBeInTheDocument();
    expect(getByText(link2Text)).toBeInTheDocument();
    expect(getByText(link3Text)).toBeInTheDocument();
  });

  // TODO: Challenge 2
  it('should render an `href` attribute for each link', () => {
    const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);

    expect(getByText(link1Text)).toHaveAttribute('href', link1Href);
    expect(getByText(link2Text)).toHaveAttribute('href', link2Href);
    expect(getByText(link3Text)).toHaveAttribute('href', link3Href);
  });
});
