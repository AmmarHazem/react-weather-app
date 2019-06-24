import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getWeatherData} from '../redux/actions'

class Form extends Component {

    state = {
        city : '',
        country : '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.getWeatherData(this.state.city, this.state.country)
        this.setState({
            city : '',
            country : '',
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    placeholder="City"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="country"
                                    className="form-control"
                                    placeholder="Country"
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button disabled={this.props.loading} className="btn btn-success">
                                {
                                    this.props.loading ?
                                    'Loading...' :
                                    'Search'
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapActionsToProps = {
    getWeatherData : getWeatherData,
}

export default connect(mapStateToProps, mapActionsToProps)(Form)
