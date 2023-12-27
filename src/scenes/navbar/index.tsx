import FLexBetween from '@/components/FlexBetween';
import { Box, Typography, useTheme } from '@mui/material';
import PixIcon from '@mui/icons-material/Pix';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState('dashboard');
  return (
    <FLexBetween mb='0.25rem' p='0.5rem 0rem' color={palette.grey[300]}>
      <FLexBetween gap='0.75rem'>
        <PixIcon sx={{ fontSize: '28px' }} />
        <Typography variant='h4' fontSize='16px'>
          Finanseer
        </Typography>
      </FLexBetween>
      <FLexBetween gap='2rem'>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to='/'
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
          <Link
            to='/'
            onClick={() => setSelected('prediction')}
            style={{
              color: selected === 'prediction' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            prediction
          </Link>
        </Box>
      </FLexBetween>
    </FLexBetween>
  );
};

export default Navbar;
