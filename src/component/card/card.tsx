import { useState } from 'react';
import { ReactComponent as IconMore } from 'assests/svg/more_cion.svg';
import history from 'services/history';
import { Button } from '../button';

import * as Styled from './sytle';

export type PropsCommentsProps = {
    id: number;
    invested_value: string;
    amout?: number;
    rentability?: string;
    gain?: string;
    cdi?: string;
    datail?: boolean;
};
const Card = ({
    invested_value,
    rentability,
    gain,
    cdi,
    id,
    datail,
}: PropsCommentsProps): JSX.Element => {
    const [menu, setMenu] = useState(false);

    const redirectToId = (): void => {
        history.push('/detalhes', {
            id,
        });
        setMenu(false);
    };
    return (
        <div>
            <Styled.Header>
                <Styled.Text primary fontSize="large" fontWeight="bold">
                    Seu Resumo
                </Styled.Text>
                {!datail && (
                    <Styled.Icon
                        tabIndex={0}
                        onBlur={() => setMenu(false)}
                        status={menu}
                    >
                        <Styled.MenuIcon
                            onClick={redirectToId}
                            visibility={menu ? 'visible' : 'hidden'}
                        >
                            Ver card
                        </Styled.MenuIcon>

                        <IconMore
                            onClick={() => setMenu(!menu)}
                            data-testid="click-menu"
                        />
                    </Styled.Icon>
                )}
            </Styled.Header>
            <Styled.Content>
                <Styled.Text fontSize="large" paddingTop="small">
                    Valor investido
                </Styled.Text>
                <Styled.Text
                    fontSize="large"
                    primary
                    fontWeight="bold"
                    paddingTop="small"
                >
                    {invested_value}
                </Styled.Text>
                {rentability && (
                    <Styled.Detatil>
                        <Styled.Text fontSize="medium" paddingTop="small">
                            Rendabilidade/mês
                        </Styled.Text>
                        <Styled.Text
                            fontWeight="bold"
                            paddingTop="small"
                            fontSize="large"
                            primary
                        >
                            {rentability}
                        </Styled.Text>
                    </Styled.Detatil>
                )}

                {cdi && (
                    <Styled.Detatil>
                        <Styled.Text fontSize="medium" paddingTop="small">
                            CDI
                        </Styled.Text>
                        <Styled.Text fontWeight="bold" fontSize="large" primary>
                            {cdi}%
                        </Styled.Text>
                    </Styled.Detatil>
                )}

                {gain && (
                    <Styled.Detatil>
                        <Styled.Text fontSize="medium" paddingTop="small">
                            Ganho/mês
                        </Styled.Text>
                        <Styled.Text
                            fontWeight="bold"
                            paddingTop="small"
                            fontSize="large"
                            primary
                        >
                            {gain}
                        </Styled.Text>
                    </Styled.Detatil>
                )}
            </Styled.Content>
            <Styled.Separator />
            {datail && (
                <Button
                    type="button"
                    onClick={() => history.push('/dashboard')}
                    text="Dashboard"
                    data-after="Voltar à "
                    data-before=" Dashboard"
                />
            )}
        </div>
    );
};

export default Card;
