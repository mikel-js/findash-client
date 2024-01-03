import React from 'react';
import FLexBetween from './FlexBetween';
import { Box, Typography, useTheme } from '@mui/material';

type Props = {
  title: string;
  subTitle?: string;
  sideText: string;
  icon?: React.ReactNode;
};

const BoxHeader = ({ title, subTitle, sideText, icon }: Props) => {
  const { palette } = useTheme();
  return (
    <FLexBetween color={palette.grey[400]} margin='1.5rem 1rem 0 1rem'>
      <FLexBetween>
        {icon}
        <Box width='100%'>
          <Typography variant='h4' mb='-0.1rem'>
            {title}
          </Typography>
          <Typography variant='h6'>{subTitle}</Typography>
        </Box>
      </FLexBetween>
      <Typography variant='h5' fontWeight='700' color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FLexBetween>
  );
};

export default BoxHeader;
