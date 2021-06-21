import React, { Component } from 'react'
import Coin from '../Coin/Coin'
import styled from 'styled-components'

const Table = styled.table `
    margin: 50px auto  50px;
    display: inline-block;
    font-size: 1.4rem;
`

export default class CoinList extends Component {
    render() {
        const coinData = this.props.coinData.map(coin => <Coin key={coin.name + coin.ticker} {...coin} />)
        return (
            <Table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {coinData}
                </tbody>
            </Table>
        )
    }
}
