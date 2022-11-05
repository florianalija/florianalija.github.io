import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from './routes';

// ==============================|| APP ||============================== //

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      {/* RTL layout */}
      {/* <RTLLayout> */}
      <Routes />
      {/* </RTLLayout> */}
    </StyledEngineProvider>
  );
};

export default App;
