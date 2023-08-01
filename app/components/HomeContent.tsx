import Grid from '@mui/joy/Grid';
import Item from '@mui/joy/Grid';

function HomeContent() {
    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }} style={{color:"black"}}>
            <Grid xs={8} style={{backgroundColor: "green"}}>
                <Item>hello</Item>
            </Grid>
            <Grid xs={4} style={{backgroundColor: "blue"}}>
                <Item>xs=4</Item>
            </Grid>
            <Grid xs={4} style={{backgroundColor: "yellow"}}>
                <Item>xs=4</Item>
            </Grid>
            <Grid xs={8} style={{backgroundColor: "purple"}}>
                <Item>xs=8</Item>
            </Grid>
        </Grid>
    )
}

export default HomeContent