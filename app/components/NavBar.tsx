import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Item from '@mui/joy/Grid';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';

const breadcrumbs_style = {backgroundColor: "#FFD8BE", border: "none", padding: "0 12px 5px 12px"}

const grid_style = {
  minWidth:"1120px",
  maxWidth:"1500px",
  padding: "0px 0px 0px 0px",
  borderRadius: "15px",
  margin: "auto",
}

const text_style = {
  fontWeight: "300",
  fontSize: "1.3rem",
  color: "#332f2c",
}


const NavBar = () => {
  return (
    <Grid 
      container
      sx={grid_style}
    >
      <Grid xs={7}>
        <Item>
            <Breadcrumbs sx={breadcrumbs_style} separator="|">
              <Typography level="body-sm" sx={text_style}>Resume</Typography>
              <Typography level="body-sm" sx={text_style}>Contact</Typography>
              <Typography level="body-sm" sx={text_style}>LinkedIn</Typography>
            </Breadcrumbs>
        </Item>
      </Grid>
      <Grid xs={5}>
       
      </Grid>
    </Grid>
  )
}

export default NavBar