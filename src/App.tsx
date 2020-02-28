import * as React from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import RoomOverview from './page/RoomOverview';
import RoomList from './page/RoomList';
import RoomDetail from './page/RoomDetail';

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Header/>

                <main>
                    <Switch>
                        <Route path="/" component={RoomList} exact/>
                        <Route path="/overview" component={RoomOverview}/>
                        <Route path="/detail" component={RoomDetail}/>
                    </Switch>
                </main>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;