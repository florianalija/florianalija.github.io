import { cloneElement, useState } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { TikTok } from './TikTok';
import { Instagram } from './Instagram';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  useMediaQuery,
  Grid,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// assets
import { Close, Menu } from '@mui/icons-material';
import { TikTokMobile } from './TikTokMobile';
import { InstagramMobile } from './InstagramMobile';

function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });

  return cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: '#051717',
      color: theme.palette.text.dark,
    },
  });
}

const useStyles = makeStyles({
  tiktokIcon: {
    paddingRight: '15.5px',
    cursor: 'pointer',
  },
  instagramIcon: {
    paddingRight: '5px',
    cursor: 'pointer',
  },
  augmentedStyle: {
    letterSpacing: '4.37751px',
    fontFamily: 'Raleway',
    fontWeight: '500',
    fontSize: '15.759px',
    lineHeight: '150%',
    fontStyle: 'normal',
  },
  MuiContainerMaxWidthLg: {
    maxWidth: '100%',
    padding: '31px 90px 31px 90px',
  },
  MuiContainerMaxWidthXs: {
    maxWidth: '100%',
    padding: '21px 0px 21px 0px',
  },
  headerTitle: {
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '150%',
    fontStyle: 'normal',
    textTransform: 'none',
  },
  headerMobileMenu: {
    fontFamily: 'Raleway',
    fontWeight: '700',
    fontSize: '47.625px',
    lineHeight: '150%',
    fontStyle: 'normal',
    textTransform: 'none',
    color: 'white',
  },
  augmentedStyleMobile: {
    letterSpacing: '4.38px',
    fontFamily: 'Raleway',
    fontWeight: '500',
    fontSize: '22px',
    lineHeight: '150%',
    fontStyle: 'normal',
    color: 'white',
    padding: '6px 8px',
  },
  tiktokIconMobile: {
    padding: '0px 29.51px 0px 12px',
    cursor: 'pointer',
  },
  instagramIconMobile: {
    padding: '0px 8px 0px 8px',
    cursor: 'pointer',
  },
  menuFooterText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '150%',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  activeMenu: {
    color: '#FCFC12',
  },
});

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
  const [drawerToggle, setDrawerToggle] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const activePath = location?.pathname;

  /** Method called on multiple components with different event types */
  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll {...others}>
      <MuiAppBar id="header" sx={{ position: 'relative', boxShadow: 'none' }}>
        <Container className={matchesXs ? classes.MuiContainerMaxWidthXs : classes.MuiContainerMaxWidthLg}>
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left', display: 'flex', flexDirection: 'row' }}>
              <Button
                className={`${classes.headerTitle} ${activePath === '/art' && classes.activeMenu}`}
                color="inherit"
                onClick={() => navigate('/art')}
              >
                Art
              </Button>
              <Button
                className={`${classes.headerTitle} ${activePath === '/talk' && classes.activeMenu}`}
                color="inherit"
                onClick={() => navigate('/')}
              >
                Talk
              </Button>
            </Typography>
            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
              <Typography component="div">
                <Typography className={classes.augmentedStyle}>AI AUGMENTED ART</Typography>
                <Typography
                  variant="subtitle1"
                  textAlign={'right'}
                  sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}
                >
                  <Typography className={classes.tiktokIcon}>
                    <TikTok />
                  </Typography>
                  <Typography className={classes.instagramIcon}>
                    <Instagram />
                  </Typography>
                </Typography>
              </Typography>
            </Stack>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton
                color="inherit"
                onClick={drawerToggler(true)}
                size="large"
                sx={{ height: '42px', width: '42px' }}
              >
                <Menu sx={{ fontSize: '2.5rem' }} />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{
                  minHeight: '100vh !important',
                }}
                PaperProps={{
                  sx: {
                    height: '100% !important',
                    backgroundColor: '#051717',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 'auto',
                    backgroundColor: '#051717 !important',
                    height: '100% !important',
                  }}
                  role="presentation"
                  onClick={drawerToggler(false)}
                  onKeyDown={drawerToggler(false)}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sx={{ paddingTop: '33.75px !important' }}>
                      <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                        <Grid item xs={2}>
                          <IconButton
                            color="inherit"
                            onClick={drawerToggler(false)}
                            size="large"
                            sx={{ height: '42px', width: '42px' }}
                          >
                            <Close sx={{ fontSize: '2.5rem', color: 'white' }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ paddingTop: '85.63px !important', paddingLeft: '32.88px !important' }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Button
                            className={`${classes.headerMobileMenu}  ${activePath === '/' && classes.activeMenu}`}
                            onClick={() => navigate('/')}
                          >
                            Home
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            className={`${classes.headerMobileMenu}  ${activePath === '/art' && classes.activeMenu}`}
                            onClick={() => navigate('/art')}
                          >
                            Art
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            className={`${classes.headerMobileMenu}  ${activePath === '/talk' && classes.activeMenu}`}
                            onClick={() => navigate('/')}
                          >
                            Talk
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ paddingTop: '136.63px !important', paddingLeft: '33px !important' }}>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography textAlign="left" className={classes.augmentedStyleMobile}>
                            AI AUGMENTED ART
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="subtitle1"
                            textAlign={'left'}
                            sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}
                          >
                            <Typography className={classes.tiktokIconMobile}>
                              <TikTokMobile />
                            </Typography>
                            <Typography className={classes.instagramIconMobile}>
                              <InstagramMobile />
                            </Typography>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        paddingTop: '103.57px !important',
                        paddingLeft: '33px !important',
                        paddingBottom: '29px  !important',
                      }}
                    >
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography textAlign="left" className={classes.menuFooterText}>
                            © WUBBUSHI 2022
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
