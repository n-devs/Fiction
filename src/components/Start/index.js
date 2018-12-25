import React from 'react'
import firebase from "firebase"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import dbClient, { dbUser } from '../../database/offline/data/user'
import Page from './data/page'
import BookGame from './data/logo/BookGame'
import Store from '../Store'
import Library from '../Store/data/Library'
import Recommend from '../Store/data/Recommend'
import NewUpdate from '../Store/data/NewUpdate'
import Discount from '../Store/data/Discount'



export default class Start extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: false,
        }
    }
    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ auth: !!user, ...user.providerData[0] })
            sessionStorage.setItem('login', 'true')
            clearInterval()
            dbUser({ ...user.providerData[0] })
        })

        if (sessionStorage.getItem('login') == true) {
            this.setState({ auth: true })
        }
    }



    render() {
       
        return (
            <React.Fragment>
                {this.state.auth
                    ? <React.Fragment>
                        <Switch  userData={this.state}>
                            <Route exact path="/" children={(e) => (e,
                                <Store userData={this.state} />
                            )} />
                            <Route path="/library" component={Library} />
                            <Route path="/recommend" component={Recommend} />
                            <Route path="/new-update" component={NewUpdate} />
                            <Route path="/discount" component={Discount} />
                        </Switch>
                    </React.Fragment>
                    : <React.Fragment>
                        <Page>
                            <BookGame width="150" />
                        </Page>
                    // )} />
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}