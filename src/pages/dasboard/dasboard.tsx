import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import * as queries from 'services/querries';

import { CardList } from 'component/cardList';
import { Button } from 'component/button';
import Skeleton from 'react-loading-skeleton';

import * as Styled from './style';

const Home = (): JSX.Element => {
    const [showMore, setShowMore] = useState(1);
    const { loading, error, data } = useQuery(queries.Summary);

    if (loading)
        return (
            <Styled.ContainerCard>
                <Styled.TextLoading>CARREGANDO.....</Styled.TextLoading>
                <Skeleton
                    height={30}
                    style={{ marginTop: 20, boxSizing: 'border-box' }}
                    width={100}
                    count={1}
                />
                <Skeleton
                    height={40}
                    style={{ marginTop: 20 }}
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
                    width={110}
                    count={1}
                />
            </Styled.ContainerCard>
        );

    if (error)
        return (
            <Styled.TextLoading>Algo de errado aconteceu!</Styled.TextLoading>
        );

    const changePrev = (prev: number): number => {
        const canPrev = prev + 1 <= data?.wealthSummary.length;
        return canPrev ? prev + 1 : data?.wealthSummary.length;
    };

    const _handleShowMore = (): void => {
        setShowMore(changePrev);
    };

    const _handleShowLess = (): void => {
        showMore > 1 && setShowMore((prev) => prev - 1);
    };

    return (
        <Styled.ContainerCard>
            <CardList list={data?.wealthSummary} limit={showMore} />
            {showMore < data?.wealthSummary.length ? (
                <Button
                    type="button"
                    text="Ver Mais"
                    onClick={_handleShowMore}
                    data-after="Ver "
                    data-before=" Mais"
                />
            ) : (
                <Button
                    type="button"
                    text="Ver Menos"
                    onClick={_handleShowLess}
                    data-after="Ver "
                    data-before=" Menos"
                />
            )}
        </Styled.ContainerCard>
    );
};

export default Home;
