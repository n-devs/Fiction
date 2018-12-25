import React from 'react'

import './styles.css'

export default class StickyBar extends React.Component {

    render(){
        return (
            <React.Fragment>
                <div class="sticky" style={{zIndex: `${this.props.zIndex}`}}>{this.props.children}</div>
            </React.Fragment>
        )
    }
}