import * as React from 'react';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Item from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';

const container_style = {
    color: "#332f2c",
    width: "90%",
    maxWidth: "400px",
    align: 'left',
    boxShadow: "0px 5px 30px 0px rgba(0,0,0,0.75)",
    margin: "auto",
    marginTop: "31px",
    borderRadius: "15px",
    textAlign: "center",
    padding: "13px 0px 13px 0px",
}

const text_style = {
    fontSize: "1.9rem",
    fontWeight: "200",
    fontHeight: "1.2",
    color: "#332f2c",
}

const Footer = () => {
  return (
    <Box sx={container_style}>
        <Typography sx={text_style}>Christian Szablewski-Paz</Typography>
        <Typography sx={text_style}>Updated Jan. 2024</Typography>
    </Box>
  );
}

export default Footer