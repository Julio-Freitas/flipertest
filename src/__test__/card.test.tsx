import React from 'react';

import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { Card } from '../component/card';
import history from '../services/history';

import { render, screen, fireEvent, cleanup } from '@testing-library/react';
beforeEach(() => cleanup());

const componentRender = (Component: React.Component, props): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...props} />
        </ThemeProvider>
    );
};

describe('Test component Card', () => {
    const Props = {
        id: 1,
        invested_value: 'R$3.200,00',
        amout: 5,
        rentability: 'R$10,00',
        gain: '5.0',
        cdi: '3.0',
        datail: false,
    };
    it('Test snapshot of Card', () => {
        const treeWithBreadCrumb = renderer.create(
            componentRender(Card, Props),
        );
        expect(treeWithBreadCrumb).toMatchSnapshot();
    });

    it('When click on icon show view the option (Ver Card)', async () => {
        render(componentRender(Card, Props));
        const option = await screen.getByTestId('click-menu');

        fireEvent.click(option);
        const textMeu = await screen.getByText(/ver card/i);
        expect(textMeu).toBeInTheDocument();
    });

    it('When click in (Ver Card) should redirect para path detalhes ', async () => {
        render(componentRender(Card, Props));
        const openMenu = await screen.getByTestId('click-menu');
        fireEvent.click(openMenu);
        const redirectTo = await screen.getByText(/ver card/i);
        fireEvent.click(redirectTo);
        expect(history.location.pathname).toBe('/detalhes');
    });
});
