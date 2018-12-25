import React from 'react'
import firebase from 'firebase'
import Login from '../../Login'
import './styles.css'

export default class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
            loading: false
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({ status: true })
        }, 3000)

      
    }

    render() {
        return (
            <React.Fragment>
                {this.state.status
                    ? <React.Fragment>
                        <Login />
                    </React.Fragment>
                    : <React.Fragment>
                        <div className="fiction_page_overlay" >
                            {this.props.children}
                        </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}