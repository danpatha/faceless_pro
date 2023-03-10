import React from 'react';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";

function OurStoryPage() {

  return (
    <div>
      <Typography sx={{ ml: 90 }} variant='h4'>Our Story</Typography>

      <Box
        border={3}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          pl: 3,
          ml: 30,
          mt: 10,
          width: 400,
          height: 180,
          backgroundColor: '#e0e0e0',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <h3> Faceless Pro's Mission</h3>
        <p>Our mission is to eliminate discrimination
          during the application process. <br></br>At Faceless Pro,
          we believe that the best candidate should be determined by <br></br>
          skills and experience and not on physical attributes.</p>
      </Box>

      <Box
        border={3}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          pl: 3,
          ml: 100,
          width: 700,
          height: 120,
          backgroundColor: '#e0e0e0',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <h3> Faceless Pro's Vision</h3>
        <p>Our vision is to provide a one-stop platform that solves all the problems encountered during the recruitment process for both the employers and the employee.</p>
      </Box>


    </div>
  );
}

export default OurStoryPage;
