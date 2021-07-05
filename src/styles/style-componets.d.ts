// import original module declarations
import 'styled-components';
import { theme } from './src/styles/theme';

type Theme = typeof theme;
declare module 'styled-components' {
    export interface DefaultTheme extends Theme {
        backgournd: string;
        colors: {
            primary: string;
            secondary: string;
            borderColor: string;
        };
        spacings: {
            small: string;
            medium: string;
            large: string;
        };
        font: {
            sizes: {
                small: string;
                medium: string;
                large: string;
            };
        };
    }
}
