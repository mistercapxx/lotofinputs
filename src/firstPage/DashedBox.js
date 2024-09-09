import React from 'react';
import { Box } from '@mui/material';

const DashedBox = ({ children }) => {
    return (
      <Box
        sx={{
          width: '1800px',
          height: '1450px',
          border: '2px dashed rgba(0, 0, 0, 0.5)',
          display: 'flex',
          padding: '55px',
          gap: '16px',
          margin: '20px', 
          backgroundColor: 'white',
          marginTop:'30px'
        }}
        >
               {children}
    </Box>
  );
};

export default DashedBox;
