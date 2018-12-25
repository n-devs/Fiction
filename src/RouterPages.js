import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Start from './components/Start'

export default class RouterPages extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" component={Start} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/img/:id" component={ImageView} />
                </Switch>
                {isModal ? <Route path="/img/:id" component={Modal} /> : null}
            </React.Fragment>
        )
    }
}