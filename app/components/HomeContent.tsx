import Grid from '@mui/joy/Grid';
import Item from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';
import BioCard from './BioCard'
import Box from '@mui/joy/Box';

function HomeContent() {
    return (
        <Grid 
            container 
            spacing={2} 
            style={{
                color:"black", 
                height:"80vh", 
                minHeight:"600px",
                minWidth:"1120px",
                maxWidth:"1800px",
                backgroundColor:"#FFD8BE", 
                padding: "13px 0px 0px 20px",
                borderRadius: "15px",
                margin: "auto",
            }}>
            <Grid xs={8}>
                <Item>
                    <Box
                        sx={{
                            paddingLeft: "20px",
                            width: "100%",
                            objectFit: 'cover',
                            borderRadius: "15px",
                            backgroundPosition: '60% 50%',
                            boxShadow: "0px 5px 30px 0px rgba(0,0,0,0.75)",
                        }}
                    >
                        <Typography 
                            level="title-lg"
                            sx = {{
                                fontSize: "4rem",
                                fontWeight: "200",
                                color: "#000000",
                                padding: "0px 0px 10px 0px",
                            }}
                        >
                            How goes it?
                        </Typography>
                    </Box>
                </Item>
            </Grid>
            <Grid xs={4} style={{height: "100%"}}>
                <Item style={{height: "100%"}}>
                    <BioCard />
                </Item>
            </Grid>
        </Grid>
    )
}

export default HomeContent