import Grid from '@mui/joy/Grid';
import Item from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import BioCard from './BioCard'
import Box from '@mui/joy/Box';
import NavBar from './NavBar';
import Footer from './Footer';

const main_container_style = {
    paddingTop: "10px",
    width: "100%",
    margin: "auto",
}

const grid_style = {
    height:"600px",
    width: "1250px",
    maxHeight: "800px",
    padding: "0px 20px 0px 20px",
    borderRadius: "15px",
    margin: "auto",
    marginTop: "5px",
    color: "#332f2c",
}

const navbar_container_style = {
    height: "30px",
    width: "1320px",
    padding: "0px 0px 0px 30px",
    margin: "45px auto 0px auto",
    color: "#332f2c",
}

const box_style = {
    padding: "0px 20px 0px 20px",
    width: "100%",
    objectFit: 'cover',
    borderRadius: "15px",
    backgroundPosition: '60% 50%',
    boxShadow: "0px 5px 30px 0px rgba(0,0,0,0.75)",
    height: "600px",
    margin: "auto"
}

const text_container_style = {
    padding: "0px 0px 20px 3%",
    width: "100%",
    maxWidth: "700px",
}

const title_style = {
    fontSize: "6.0rem",
    fontWeight: "100",
    color: "#332f2c",
    borderBottom: "0.5px solid #332f2c",
    lineHeight: "1.2",
    padding: "15px 0px 10px 0px",
    marginBottom: "20px",
}

const main_text_style = {
    fontSize: "2.0rem",
    fontWeight: "200",
    color: "#332f2c",
    padding: "0px 0px 10px 0px",
}

const bio_card_container_style = {
    margin: "auto",
    height: 480,
}

const italicized_style = {
    fontStyle: 'italic',
}

const MainText = () => (
    <Box sx={box_style}>
        <Box sx={text_container_style}>
            <Typography sx={title_style}>
                Hey There! ☺
            </Typography>
            <Typography sx={main_text_style}>
                My name is Christian. I am a full stack software engineer based out of the New York City area. Welcome to my portfolio site! 
            </Typography>
            <Typography sx={main_text_style}>
                I am experienced in building web and mobile enterprise systems from front to back.  Solving real problems using technology is my passion, and building web apps is fun! 
            </Typography>
            <Typography sx={main_text_style}>
                <span style={italicized_style}>And hey! Why not make them look good too?</span>
            </Typography>
        </Box>
    </Box>
)

const MainGrid = () => (
    <Grid
        container
        spacing={1}
        style={grid_style}
    >
        <Grid xs={8}>
            <Item>
                <MainText/>
            </Item>
        </Grid>
        <Grid xs={4}>
            <Item sx={bio_card_container_style}>
                <BioCard/>
                <Footer/>
            </Item>
        </Grid>
    </Grid>
)


const HomeContent = () => {
    return (
        <Box style={main_container_style}>
            <Grid style={navbar_container_style}><Box style={navbar_container_style}><NavBar/></Box></Grid>
            <MainGrid/>
        </Box>
    )
}

export default HomeContent