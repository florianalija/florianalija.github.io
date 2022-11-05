import { Typography, Avatar, useMediaQuery, Grid, Box } from '@mui/material';
import AppBar from '../../../ui-component/AppBar';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Footer } from '../../../ui-component/Footer';

const useStyles = makeStyles({
  headerImageLg: {
    padding: '0px 0px 0px 0px',
    width: '100%',
    height: '185px',
  },
  headerImageXs: {
    padding: '0px 0px 0px 0px',
    width: '100%',
    height: '88px',
  },
  bImageLg: {
    width: '179.57px',
    height: '189.69px',
  },
  bImageXs: {
    width: '130.9px',
    height: '138.28px',
  },
  heartImageLg: {
    height: '62px',
    width: '62px',
  },
  heartImageXs: { height: '45.2px', width: '45.2px' },
});

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar />
      <Grid container spacing={3} sx={{ backgroundColor: '#051717', paddingBottom: '70px' }}>
        <Grid item xs={12}>
          <Avatar
            variant="square"
            src="./assets/images/headerImage.png"
            className={matchesXs ? classes.headerImageXs : classes.headerImageLg}
          ></Avatar>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            spacing={3}
            sx={{ paddingTop: matchesXs ? '450px' : '300px' }}
          >
            <Grid item xs={6} sm={6} md={3} lg={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Avatar
                variant="square"
                src="./assets/images/heart.svg"
                className={matchesXs ? classes.heartImageXs : classes.heartImageLg}
              ></Avatar>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Avatar
                variant="square"
                src="./assets/images/b.svg"
                className={matchesXs ? classes.bImageXs : classes.bImageLg}
              ></Avatar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};
export default Home;
