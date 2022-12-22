
import React from 'react';

// Suspense
import { Fragment, Suspense, lazy } from 'react';

// Theme
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './utils/theme';

// Global Style
// import GlobalStyles from "./utils/globalstyles";

// Pace
// import Pace from "./utils/Pace";

// Store
import { Provider } from 'react-redux';
import store from './redux';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteProvider from './context';

const MainComponent = lazy(() => import('./components/Main'));


const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Suspense fallback={<Fragment />} >
            <RouteProvider>
              <Routes>
                <Route path="*" element={<MainComponent />} />
              </Routes>
            </RouteProvider>
          </Suspense>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
