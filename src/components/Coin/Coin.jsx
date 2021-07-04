import React from 'react'
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
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 4 }).format(number);
}
export default function Coin(props) {
    const balanceText = props.showBalance ? `${props.balance} (${usd(props.balance * props.price)})` : '***** ($*****)'
    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <TdCurr>{usd(props.price)}</TdCurr>
            <TdCurr>{balanceText}</TdCurr>
            <Td><button onClick={() => props.handleRefresh(props.coinId)}>Refresh</button></Td>
        </tr>
    )
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    handleRefresh: PropTypes.func.isRequired,
}
