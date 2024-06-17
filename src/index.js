import React from 'react';
import { createRoot } from 'react-dom/client';
import 'assets/css/App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthLayout from 'layouts/auth';
import AdminLayout from 'layouts/admin';
import RtlLayout from 'layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <Router>
          <Switch>
            <Route path={`/auth`} component={AuthLayout} />
            <Route path={`/admin`} component={AdminLayout} />
            <Route path={`/rtl`} component={RtlLayout} />
            <Redirect from='/' to='/admin' />
          </Switch>
        </Router>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>
);
