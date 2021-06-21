import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Td = styled.td `
    border: 1px solid #ccc;
    width: 15vh;
`

export default class Coin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: this.props.price,
        }
    }
    componentDidMount() {
        const callback = () => {
            const randomPct = 0.995 + Math.random() * 0.01
        }
        setInterval(callback, 1000)
    }
    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                <Td><button>Refresh</button></Td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}