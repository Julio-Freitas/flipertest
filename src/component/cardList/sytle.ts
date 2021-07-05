import styled from 'styled-components';

type SizeTypes = 'small' | 'medium' | 'large' | undefined;
type FontWeight = 'normal' | 'bold';

type propsText = {
    primary?: boolean;
    fontSize?: SizeTypes;
    fontWeight?: FontWeight;
    paddingTop?: SizeTypes;
    paddingBottom?: SizeTypes;
    paddingRight?: SizeTypes;
    paddingLeft?: SizeTypes;
};

export const ContainerCard = styled.div`
    filter: drop-shadow(0 0 0.1px ${({ theme }) => theme.colors.borderColor});
    max-width: 344px;
    max-height: 352px;
    margin: ${({ theme }) => theme.spacings.medium} auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #fff;
    padding: ${({ theme }) => theme.spacings.small};
    box-shadow: 2px 4px 4px 0 ${({ theme }) => theme.colors.borderColor};
`;

export const Header = styled.div`
    padding-top: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        cursor: pointer;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Detatil = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 1.2em;
`;

export const Text = styled.span<propsText>`
    display: block;
    color: ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.secondary)};
    font-size: ${({ fontSize, theme }) => !!fontSize && theme.font.sizes[fontSize]};
    font-weight: ${({ fontWeight }) => fontWeight || 'normal'};

    ${({ paddingTop, paddingRight, paddingBottom, paddingLeft, theme }) =>
        paddingTop
            ? `padding-top: ${theme.spacings[paddingTop]};`
            : paddingRight
            ? `padding-right: ${theme.spacings[paddingRight]};`
            : paddingBottom
            ? `padding-bottom: ${theme.spacings[paddingBottom]};`
            : !!paddingLeft && `padding-left: ${theme.spacings[paddingLeft]};`}
`;

export const Separator = styled.hr`
    border: 0.1em solid #9aa3bc;
    margin: 26px 0;
`;
