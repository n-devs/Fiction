import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import Start from './components/Start'

function PageLink({ label, to, activeOnlyWhenExact }) {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? "active" : ""}>
            {match ? "> " : ""}
            <Link to={to}>{label}</Link>
          </div>
        )}
      />
    );
  }

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Route component={Start} />
                </Router>
            </React.Fragment>
        )
    }
}