import React from 'react';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import ContactUs from './ContactUs';
class MyApp extends React.Component {
    render() {
        return (
            <div className="MyApp">
                <h1>My App!</h1>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            {/* <Route path="/" component={Help} exact={true} /> */}
                            <Route path="/contact" component={ContactUs} />
                            <Route component={PageNotFound} />

                        </Switch>

                    </div>
                </BrowserRouter>

            </div>
        );
    }
}


export default MyApp;
