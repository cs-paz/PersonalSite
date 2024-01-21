import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

const card_style = {
    width: "90%",
    maxWidth: "400px",
    height: "450px",
    align: 'left',
    flexWrap: 'wrap',
    backgroundColor: "#FFD8BE",
    boxShadow: "0px 5px 30px 0px rgba(0,0,0,0.75)",
    margin: "auto"
}

const card_content_style = {
    alignItems: 'center',
    textAlign: 'center',
}

const avatar_sx = { 
  '--Avatar-size': '18rem',
}

const avatar_style = { 
  'margin': '40px auto 15px auto',
}

const caption_style = {
  fontSize: "1.7rem",
  fontWeight: "200",
  fontHeight: "1.2",
  color: "#332f2c",
}

const bolded = {
  fontWeight: "300",
  textDecorationLine: "none",
  color: "inherit",
  "&:hover": {
    fontWeight: "400" 
  },
}

const FollowMeOnGithub = () => (
  <Typography level="title-md" style={caption_style}>
    Follow me on <Link href="https://www.github.com/cs-paz" style={bolded}>Github!</Link>
  </Typography>
)


const BioCard = () => {
  return (
    <Card
      sx={card_style}
    >
      <CardContent sx={card_content_style}>
        <Avatar src="/profile_picture.png" sx={avatar_sx} style={avatar_style} />
        <FollowMeOnGithub/>
      </CardContent>
    </Card>
  );
}

export default BioCard