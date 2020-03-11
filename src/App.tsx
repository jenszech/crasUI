import * as React from 'react';
import { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import RoomOverview from './page/RoomOverview';
import RoomList from './page/RoomList';
import RoomDetail from './page/RoomDetail';
import RoomInfo from './page/RoomInfo';
import Booking from './page/Booking';

import history from './shared/history';

function App() {
    return (
        <Fragment>
            <Router history={history}>
                <Header/>
                <main>
                    <Switch>
                        <Route path="/" component={RoomList} exact/>
                        <Route path="/overview" component={RoomOverview}/>
                        <Route path="/detail" component={RoomDetail}/>
                        <Route path="/info" component={RoomInfo}/>
                        <Route path="/booking" component={Booking}/>
                    </Switch>
                </main>
            </Router>
        </Fragment>
    );
}

export default App;