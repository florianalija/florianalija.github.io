import { useState } from 'react';
import { Typography, Avatar, useMediaQuery, Grid, Box, Tab, Tabs } from '@mui/material';
import AppBar from '../../../ui-component/AppBar';
import { makeStyles } from '@mui/styles';
import { useTheme, styled } from '@mui/material/styles';
import { Footer } from '../../../ui-component/Footer';
import photos from '../../../utils/tabPhotos';

const useStyles = makeStyles({
  tabPhoto: {
    width: '100%',
    height: '278px',
  },
  tabPhotoMobile: {
    width: '100%',
    height: '338px',
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const theme = useTheme();

  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: matchesXs ? 0 : 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#FCFC12',
    top: 0,
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  width: '16.66%',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
  },
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  marginRight: '0px',
  fontWeight: 600,
  borderTop: '1px solid #667085',
  color: '#8C8D8F',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  lineHeight: '24px',
  '&:hover': {
    color: '#FCFC12',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#FCFC12',
    borderTop: '1px solid #FCFC12',
    transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    fontWeight: 600,
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    lineHeight: '24px',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const Art = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar />
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: '#051717', paddingBottom: '70px' }}
      >
        <Grid item xs={12} sx={{ padding: matchesXs ? '30px 20px !important' : '50px 122px !important' }}>
          <Grid
            container
            spacing={3}
            sx={{ paddingLeft: '24px' }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Box sx={{ width: '100%' }}>
                <Box>
                  <AntTabs value={value} onChange={handleChange} aria-label="ant example" variant="scrollable">
                    <AntTab label="Fake Rich" />
                    <AntTab label="Presidents with Nukes" />
                    <AntTab label="Unhappy Meal" />
                    <AntTab label="Defiance Movement" />
                    <AntTab label="Tab 1" />
                    <AntTab label="Tab 1" />
                  </AntTabs>
                </Box>
                <Box sx={{ p: matchesXs ? 1 : 3 }} />
                <TabPanel value={value} index={0}>
                  <Grid container spacing={4}>
                    {photos[0].map((e) => (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Avatar
                          src={e}
                          variant="square"
                          className={matchesXs ? classes.tabPhotoMobile : classes.tabPhoto}
                        ></Avatar>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Grid container spacing={3}>
                    {photos[1].map((e) => (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Avatar
                          src={e}
                          variant="square"
                          className={matchesXs ? classes.tabPhotoMobile : classes.tabPhoto}
                        ></Avatar>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Grid container spacing={3}>
                    {photos[2].map((e) => (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Avatar
                          src={e}
                          variant="square"
                          className={matchesXs ? classes.tabPhotoMobile : classes.tabPhoto}
                        ></Avatar>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Grid container spacing={3}>
                    {photos[3].map((e) => (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Avatar
                          src={e}
                          variant="square"
                          className={matchesXs ? classes.tabPhotoMobile : classes.tabPhoto}
                        ></Avatar>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <Grid container spacing={3}>
                    {photos[4].map((e) => (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Avatar
                          src={e}
                          variant="square"
                          className={matchesXs ? classes.tabPhotoMobile : classes.tabPhoto}
                        ></Avatar>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <Grid container spacing={3}>
                    {photos[5].map((e) => (
                      <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Avatar
                          src={e}
                          variant="square"
                          className={matchesXs ? classes.tabPhotoMobile : classes.tabPhoto}
                        ></Avatar>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};
export default Art;
