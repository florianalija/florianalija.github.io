import { Avatar, useMediaQuery, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles({
  footerLg: {
    width: '100%',
    height: 'auto',
    // position: 'absolute',
    // bottom: 0,
  },
  footerXs: {
    width: '100%',
    height: 'auto',
    // position: 'absolute',
    // bottom: 0,
  },
  footerImageLg: {
    width: '100%',
    height: '185px',
  },
  footerImageXs: {
    width: '100%',
    height: '88px',
  },
});

export const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box className={matchesXs ? classes.footerXs : classes.footerLg}>
      <Avatar
        variant="square"
        src="./assets/images/footerImage.jpeg"
        className={matchesXs ? classes.footerImageXs : classes.footerImageLg}
      ></Avatar>
    </Box>
  );
};
