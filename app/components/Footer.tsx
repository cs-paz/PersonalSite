import * as React from 'react';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Item from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';

const container_style = {
    height: "30px",
    color: "#332f2c",
}

const text_style = {
    fontSize: "2.2rem",
    fontWeight: "200",
    fontHeight: "1.2",
    color: "#332f2c",
}

const italicized_style = {
    fontStyle: 'italic',
}

const Footer = () => {
  return (
    <footer>
        <Box sx={container_style}>
            <Typography sx={text_style}>Christian Szablewski-Paz</Typography>
            <Typography sx={text_style}>Updated Jan. 2024</Typography>
        </Box>
    </footer>
  );
}

export default Footer