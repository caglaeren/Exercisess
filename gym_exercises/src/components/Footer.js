import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';


const Footer = () => {
  return (
    <Box mt='80px' bgcolor="#fff4">
      <Stack gap="40px" alignItems='center' px='40px' pt='24px' >
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography variant='h5' pb='40px' mt='20px' fontSize={{ xs: 10, sm: 15, md: 15 }}>
          "Ben sporcunun zeki, çevik ve aynı zamanda ahlaklısını sevrim."     
        </Typography>
        <Typography variant="h5" pb="40px" mt="20px" fontSize= {{xs:12, sm:15, md: 15}}>
            by Cagla Eren
        </Typography>

      </Stack>

    </Box>
  )
}

export default Footer