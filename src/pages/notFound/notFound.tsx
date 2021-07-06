import history from '../../services/history';
import * as Styled from './style';
import { useEffect, useState, useRef } from 'react';

const NotFound = (): JSX.Element => {
    const [counter, setCount] = useState(3);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const id = setTimeout(() => {
            counter !== 0 && setCount(counter - 1);
        }, 1000);
        intervalRef.current = id;
        if (counter === 0) history.push('/dashboard');
        return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    }, [counter]);

    return (
        <Styled.ContainerCard>
            <h1>
                Oh não! <br /> Página não encontrada!
            </h1>
            <Styled.SadIcon />
            <p>Você sera redirecionado para a dashboard em ...{counter}</p>
        </Styled.ContainerCard>
    );
};

export default NotFound;
