import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
type TNavBar = {
  links: {
    text: string;
    href: string;
    'data-testid'?: string;
  }[];
};

function NavBar({ links }: TNavBar) {
  return (
    <Box
      component="aside"
      sx={{
        background: '#0c2975',
        padding: '16px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <NavLink
        to="/"
        style={{ cursor: 'pointer', marginBottom: '80px', marginTop: '40px' }}
      >
        <img src="/surelogo.svg" alt="logo" />
      </NavLink>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        {links.map(({ text, href, 'data-testid': dataTestId }) => (
          <NavLink
            key={href}
            to={href}
            style={({ isActive }) => ({
              color: '#fff',
              textDecoration: 'none',
              fontWeight: isActive ? "bold" : "normal"
            })}
            data-testid={dataTestId}
          >
            {text}
          </NavLink>
        ))}
      </Box>
    </Box>
  );
}

export default NavBar;
