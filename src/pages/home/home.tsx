import { Button } from '../../component/button';

import * as Styled from './style';
import history from '../../services/history';

const Home = (): JSX.Element => {
    return (
        <Styled.ContainerCard>
            <h1>Clique no botão para visualiazar a dasboard</h1>
            <Button
                type="button"
                text="Ver Dashboard"
                onClick={() => history.push('/dashboard')}
                data-after="Ver "
                data-before=" Dashboard"
            />
        </Styled.ContainerCard>
    );
};

export default Home;
