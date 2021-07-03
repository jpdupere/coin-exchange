import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Td = styled.td `
    border: 1px solid #ccc;
    width: 15vh;
    padding: 0 1rem 0 1rem;
`

const TdCurr = styled.td `
    border: 1px solid #ccc;
    width: 15vh;
    text-align: right;
    padding: 0 1rem 0 1rem;
`
const usd = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
}
export default class Coin extends Component {
    render() {
        const balanceText = this.props.showBalance ? `${this.props.balance} (${usd(this.props.balance * this.props.price)})` : '***** ($*****)'
        return (
            <tr>
                <Td>{this.props.name}</Td>
                <Td>{this.props.ticker}</Td>
                <TdCurr>{usd(this.props.price)}</TdCurr>
                <TdCurr>{balanceText}</TdCurr>
                <Td><button onClick={() => this.props.handleRefresh(this.props.key)}>Refresh</button></Td>
            </tr>
        )
    }
}

Coin.propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleRefresh: PropTypes.func.isRequired,
}
