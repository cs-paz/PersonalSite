import Grid from '@mui/joy/Grid';
import Item from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import BioCard from './BioCard'
import Box from '@mui/joy/Box';
import NavBar from './NavBar';

const main_container_style = {
    paddingTop: "10px", 
    width: "100%", 
    margin: "auto",  
}

const grid_style = {
    height:"90vh", 
    minHeight:"600px",
    minWidth:"1120px",
    maxWidth:"1500px",
    maxHeight: "800px",
    padding: "13px 20px 0px 20px",
    borderRadius: "15px",
    margin: "auto",
    color: "#332f2c",
}

const box_style = {
    padding: "0px 20px 0px 20px",
    width: "100%",
    objectFit: 'cover',
    borderRadius: "15px",
    backgroundPosition: '60% 50%',
    boxShadow: "0px 5px 30px 0px rgba(0,0,0,0.75)",
    height: "450px",
}

const text_container_style = {
    padding: "0px 3% 20px 3%",
    width: "100%",
    maxWidth: "700px",
}

const title_style = {
    fontSize: "4.2rem",
    fontWeight: "200",
    color: "#332f2c",
    borderBottom: "0.5px solid #332f2c",
    lineHeight: "1.2",
    padding: "10px 0px 0px 0px",
    marginBottom: "10px"
}

const main_text_style = {
    fontSize: "1.67rem",
    fontWeight: "200",
    color: "#332f2c",
    padding: "0px 0px 10px 0px",
}

const fill_height = {
    height: "100%"
}

const fill_width = {
    width: "100%",
}

const MainText = () => (
    <Box sx={box_style}>
        <Box sx={text_container_style}>
            <Typography sx={title_style}>
                Hey There!
            </Typography>
            <Typography sx={main_text_style}>
                My name is Christian. I am a full stack software engineer based out of the New York City area, and I am always looking for new opportunities to learn and grow as a developer.
            </Typography>
            <Typography sx={main_text_style}>
                I am experienced in building web and mobile enterprise systems from front to back.  Solving real world problems using technology is my passion, and why not make it look pretty?
            </Typography>
        </Box>
    </Box>
)


function HomeContent() {
    return (
        <Box style={main_container_style}>
            <Box style={fill_width}><NavBar/></Box>
            <Grid 
                container 
                spacing={2}
                style={grid_style}
            >
                <Grid xs={7}>
                    <Item>
                        <MainText/>
                    </Item>
                </Grid>
                <Grid xs={5}>
                    <Item sx={{marginLeft: "auto", marginRight: "0",}}>
                        <BioCard />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HomeContent