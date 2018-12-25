import React from 'react'
import FaceBookButton from './data/Button/Facebook'
import Page from './data/page'

export default class Login extends React.Component {
    constructor(props) {
        super(props)

    }

    Reload() {
        window.location.reload()
    }

    render() {
        return (
            <React.Fragment>
                <Page>
                    <FaceBookButton onClick={() => this.Reload()} />
                </Page>
            </React.Fragment>
        )
    }
}