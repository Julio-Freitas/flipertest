import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { Dasboard } from '../pages/dasboard';
import { Details } from '../pages/details';

export default function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dasboard} />
            <Route exact path="/detalhes" component={Details} />
        </Switch>
    );
}
