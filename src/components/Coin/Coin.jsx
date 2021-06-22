import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Td = styled.td `
    border: 1px solid #ccc;
    width: 15vh;
`

export default class Coin extends Component {
    render() {
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <Td>${this.props.price}</Td>
                <Td><button onClick={() => this.props.handleRefresh(this.props.ticker)}>Refresh</button></Td>
            </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleRefresh: PropTypes.func.isRequired,
}