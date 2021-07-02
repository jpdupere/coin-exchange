import React, { Component } from 'react'
import './Coin.css'
import PropTypes from 'prop-types'

export default class Coin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: this.props.price,
        }
    }
    /*
    componentDidMount() {
        const callback = () => {
            this.setState(oldState => {
                return { 
                    ...oldState,
                    price: oldState.price * (0.995 + Math.random() * 0.01),
                }
            })
        }
        setInterval(callback, 1000)
    }
    */
    handleClick(evt) {
        this.setState(oldState => {
            return { 
                ...oldState,
                price: oldState.price * (0.995 + Math.random() * 0.01),
            }
        })
    }
    render() {
        return (
            <tr className="coin-row">
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>{this.state.price}</td>
                <td><button onClick={this.handleClick.bind(this)}>Refresh</button></td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}
