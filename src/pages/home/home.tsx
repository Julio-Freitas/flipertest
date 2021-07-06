import { Button } from '../../component/button';

import * as Styled from './style';
import history from '../../services/history';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useEffect, useState } from 'react';

let removeTimeOut: ReturnType<typeof setTimeout>;

const Home = (): JSX.Element => {
    const [loading, setLoaging] = useState(true);

    useEffect(() => {
        removeTimeOut = setTimeout(() => setLoaging(false), 1000);
        return () => clearTimeout(removeTimeOut);
    }, []);

    if (loading) {
        return (
            <Styled.ContainerCard>
                <SkeletonTheme color="#E8EBF6">
                    <Skeleton
                        height={40}
                        style={{
                            padding: 10,
                            boxSizing: 'border-box',
                            margin: '10px auto',
                            width: '70%',
                            display: 'block',
                        }}
                        count={1}
                    />
                    <Skeleton
                        height={32}
                        count={1}
                        style={{ borderRadius: 50 }}
                    />
                </SkeletonTheme>
            </Styled.ContainerCard>
        );
    }
    return (
        <Styled.ContainerCard>
            <h1>Clique no botão para visualizar a dasboard</h1>
            <Button
                type="button"
                text="visualizar Dashboard"
                onClick={() => history.push('/dashboard')}
                data-after="visualizar "
                data-before=" Dashboard"
            />
        </Styled.ContainerCard>
    );
};

export default Home;
