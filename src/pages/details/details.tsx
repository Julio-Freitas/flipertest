import { useQuery } from 'react-apollo';
import * as queries from '../../services/querries';
import { useHistory } from 'react-router-dom';
import { Card } from '../../component/card';
import formatMoney from '../../utils/formatMoney';
import Skeleton from 'react-loading-skeleton';

import * as Styled from './style';
type HistoryType = {
    location: {
        state: {
            id: number;
        };
    };
};

type propsCard = {
    cdi: number;
    gain: number;
    id: number;
    profitability: number;
    total: number;
};

const Home = (): JSX.Element => {
    const hitory: HistoryType = useHistory();

    if (hitory && hitory.location.state.id) {
        const { data, loading, error } = useQuery(queries.FoundById, {
            variables: { id: hitory.location.state.id },
        });

        if (loading) {
            return (
                <Styled.ContainerCard>
                    <Skeleton
                        height={30}
                        style={{ marginTop: 20, boxSizing: 'border-box' }}
                        width={100}
                        count={1}
                    />
                    <Skeleton
                        height={40}
                        style={{ marginTop: 20, boxSizing: 'border-box' }}
                        width="100%"
                        count={1}
                    />
                    <Skeleton
                        height={60}
                        style={{ marginTop: 20, boxSizing: 'border-box' }}
                        width="100%"
                        count={1}
                    />
                    <Skeleton
                        height={30}
                        style={{
                            marginTop: 20,
                            float: 'right',
                            boxSizing: 'border-box',
                        }}
                        width="100%"
                        count={1}
                    />
                </Styled.ContainerCard>
            );
        }
        if (error) {
            return <h1>Error...</h1>;
        }

        const { cdi, gain, id, profitability, total } =
            data.wealthSummary_by_pk as propsCard;
        return (
            <Styled.ContainerCard>
                <Card
                    id={id}
                    key={id}
                    invested_value={formatMoney('pt-br', total, 'BRL')}
                    rentability={profitability.toFixed(2).replace(/\./g, ',')}
                    cdi={cdi.toFixed(2).replace(/\./g, ',')}
                    gain={formatMoney('pt-br', gain, 'BRL')}
                    datail={true}
                />
            </Styled.ContainerCard>
        );
    } else {
        return <h1>Falta id</h1>;
    }
};

export default Home;
