import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import styles from './BioCard.module.css';

const avatar_sx = { 
  '--Avatar-size': '18rem',
  'align-self': 'center',
  'margin': "40px auto 15px auto",
}

const FollowMeOnGithub = () => (
  <Typography level="title-md" className={styles.caption}>
    Follow me on <Link href="https://www.github.com/cs-paz" className={styles.bolded}>Github!</Link>
  </Typography>
)

const BioCard = () => {
  return (
    <div
      className={styles.card}
    >
      <div className={styles.card_content}>
        <Avatar src="/profile_picture.png" sx={avatar_sx} className={styles.avatar} />
        <FollowMeOnGithub/>
      </div>
    </div>
  );
}

export default BioCard