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

type PropsMenu = {
    visibility: string;
};

type PropsIcon = {
    status: boolean;
};
export const Header = styled.div`
    padding-top: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuIcon = styled.div<PropsMenu>`
    position: absolute;
    right: 14px;
    border: 1px solid #ccc;
    height: 22px;
    padding: 5px 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    transition: ease-in 0.5s;
    box-shadow: rgb(154 163 188) 0px 0px 7px;
    opacity: 0;
    visibility: ${({ visibility }) => visibility};
    width: 0;
    &:hover {
        background-color: ${({ theme }) => theme.backgournd};
        text-decoration: underline;
    }
`;

export const Icon = styled.div<PropsIcon>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    svg {
        cursor: pointer;
    }
    ${({ status }) =>
        status &&
        `
        &:focus {
          width: 190px;
          flex-direction: row-reverse;
      }

      &:focus ${MenuIcon} {
          visibility: visible;
          transition: ease-in-out 0.5s;
          opacity: 1 !important;
          width: 100px;
          margin-right: 5px;
      }

    `}
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
    color: ${({ primary, theme }) =>
        primary ? theme.colors.primary : theme.colors.secondary};
    font-size: ${({ fontSize, theme }) =>
        !!fontSize && theme.font.sizes[fontSize]};
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
    border: 0.05em solid #9aa3bc5c;
    margin: 26px 0;
`;
