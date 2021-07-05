import { memo, ReactElement, MouseEvent } from 'react';
import * as Styled from './style';

type PropsButton = {
    type: 'button' | 'submit' | 'reset' | undefined;
    text: string;
    onClick?: (event: MouseEvent) => void;
};

const Button = (props: PropsButton): ReactElement<PropsButton> => (
    <Styled.Button
        {...props}
        onClick={(event: MouseEvent) => props.onClick && props.onClick(event)}
    >
        {props?.text}
    </Styled.Button>
);

export default memo(Button);
