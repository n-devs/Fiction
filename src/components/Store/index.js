import React from 'react'
import firebase from "firebase"
import Page from './data/page'



export default class Store extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props.userData}
    }


    render() {
        return (
            <React.Fragment>
                   <Page userData={this.state} />
            </React.Fragment>
        )
    }
}