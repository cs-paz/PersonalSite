import Grid from '@mui/joy/Grid';
import Item from '@mui/joy/Grid';
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
                backgroundColor:"#FFD8BE", 
                padding: "13px 0px 0px 20px",
                borderRadius: "15px"
            }}>
            <Grid xs={8}>
                <Item>
                    <Box
                        component="img"
                        sx={{
                            zIndex: -1,
                            height: "60vh",
                            width: "100%",
                            objectFit: 'cover',
                            backgroundImage: 'url(/maine.png)',
                            borderRadius: "15px",
                            backgroundPosition: '60% 50%',
                            boxShadow: "lg",
                        }}
                    />
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