import React from 'react'
import Coin from '../Coin/Coin'
import styled from 'styled-components'

const Table = styled.table `
    margin: 50px auto  50px;
    display: inline-block;
    font-size: 1.4rem;
`

export default function CoinList(props) {
    const coinData = props.coinData.map(({ key, name, ticker, price, balance }) => {
    return <Coin 
        key={key}
        coinId={key}
        name={name} 
        ticker={ticker} 
        price={price}
        balance={balance}
        showBalance={props.showBalance}
        handleRefresh={props.handleRefresh}
        />
    })
    return (
        <Table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {coinData}
            </tbody>
        </Table>
    )
}
