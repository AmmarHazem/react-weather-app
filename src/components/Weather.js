import React, { Component } from 'react'
import {connect} from 'react-redux'


function Weather (props) {
    if(props.name){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        Location: {props.name}, {props.sys.country}
                    </div>
                    <div className="col-12">
                        Temprature: {props.main.temp}
                    </div>
                    <div className="col-12">
                        Humidity: {props.main.humidity}
                    </div>
                    <div className="col-12">
                        Conditions: {props.weather[0].description}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="container">
                Weather
            </div>
        )
    }
}
const mapStateToProps = state => {
    return state.weatherData
}

export default connect(mapStateToProps, null)(Weather)
