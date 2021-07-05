import React from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import Routes from './routes/routing';
import history from './services/history';
import api from './services/api';

import { GlobalStyles } from './styles/global-style';
import { theme } from './styles/theme';

const App = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ApolloProvider client={api}>
                <Router history={history}>
                    <Routes />
                </Router>
            </ApolloProvider>
        </ThemeProvider>
    );
};

export default App;
