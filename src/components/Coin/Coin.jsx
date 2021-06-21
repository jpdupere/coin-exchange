import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Coin.css'

export default class Coin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: this.props.price,
        }
    }
    componentDidMount() {
        const callback = () => {
            const randomPct = 0.995+ Math.random() * 0.01
        }
        setInterval(callback, 1000)
    }
    render() {
        return (
            <tr className="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.props.price}</td>
                <td><button>Refresh</button></td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}