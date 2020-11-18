import React, { Component } from "react"

import noBook from '../../../assets/images/bookNotHere.png'

export default class NotFound extends Component {
    render() {
        return (
            <div className="notFoundPage" style={{ backgroundColor: "#E3F8F2" }}>
                <br/>
                <h1 style={{paddingTop: "0vw"}}>
                    Sorry for the inconvience, <br/>
                    the page you were looking for <br/>
                    could not be found.
                </h1>
                <br />
                <div>
                    <img style={{ height: '350px', width: '500px' }} src={noBook} />
                </div>
            </div>
        )
    }
}