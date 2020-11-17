import React, { Component } from "react"

import noBook from '../../../assets/images/bookNotHere.png'

export default class NotFound extends Component {
    render() {
        return (
            <div className="page" style={{ backgroundColor: "#ECFDFF" }}>
                <h1 class="libraryHeaderText" style={{ margin: '25px', paddingTop: "0vw", color: "#46C2A5" }}>
                    Sorry for the inconvience, <br />
                    the page you were looking for <br />
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