import { Card } from '../card';

import formatMoney from '../../utils/formatMoney';
import { memo } from 'react';

export type PropsCardsItem = {
    id: number;
    cdi: number;
    gain: number;
    profitability: number;
    total: number;
};

type propsList = {
    list: PropsCardsItem[];
    limit: number;
};

const ListCard = ({ list, limit }: propsList): JSX.Element => {
    return (
        <>
            {list
                .map((item: PropsCardsItem) => (
                    <Card
                        id={item.id}
                        key={item.id}
                        invested_value={formatMoney('pt-br', item.total, 'BRL')}
                        // rentability={item.profitability
                        //     .toFixed(2)
                        //     .replace(/\./g, ',')}
                        // // cdi={item.cdi.toFixed(2).replace(/\./g, ',')}
                        // // gain={formatMoney('pt-br', item.gain, 'BRL')}
                        datail={false}
                    />
                ))
                .slice(0, limit)}
        </>
    );
};

export default memo(ListCard);
