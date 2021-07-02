import React, { Component } from 'react'
<<<<<<< HEAD
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
=======
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Td = styled.td `
    border: 1px solid #ccc;
    width: 15vh;
`

export default class Coin extends Component {
    render() {
        const balanceText = this.props.showBalance ? `${this.props.balance} ($${this.props.balance * this.props.price})` : '***** ($*****)'
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                <Td>{balanceText}</Td>
                <Td><button onClick={() => this.props.handleRefresh(this.props.ticker)}>Refresh</button></Td>
>>>>>>> 4cb6bf6c9ae278f6e8d263e5083cd4b3acb87132
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
<<<<<<< HEAD
}
=======
    handleRefresh: PropTypes.func.isRequired,
}
>>>>>>> 4cb6bf6c9ae278f6e8d263e5083cd4b3acb87132
