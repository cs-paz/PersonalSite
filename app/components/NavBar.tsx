import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Item from '@mui/joy/Grid';
import Grid from '@mui/joy/Grid';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

const breadcrumbs_style = {backgroundColor: "#FFD8BE", border: "none"}

const grid_style = {
  minWidth:"1120px",
  maxWidth:"1500px",
  padding: "0px 0px 0px 62px",
  borderRadius: "15px",
  margin: "auto",
  color: "#332f2c",
}

{/* <Grid
    container
    spacing={2}
    style={grid_style}
>
    <Grid xs={7}>
        <Item>
            <Breadcrumbs sx={breadcrumbs_style}>
              <div>Home</div>
              <div>Portfolio</div>
              <div>Social Media</div>
            </Breadcrumbs>
        </Item>
    </Grid>
    
</Grid> */}

function NavBar() {
  return (
    <Grid 
      container
      sx={grid_style}
    >
      <Grid xs={7}>
        <Item>
            <Breadcrumbs sx={breadcrumbs_style} separator="|">
              <div>Home</div>
              <div>Portfolio</div>
              <div>Social Media</div>
            </Breadcrumbs>
        </Item>
      </Grid>
      <Grid xs={5}>
       
      </Grid>
    </Grid>
  )
}

export default NavBar