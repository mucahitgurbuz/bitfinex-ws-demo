import { Box, Flex, Button } from 'bumbag'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addInitialBook,
  addInitialTrades,
  connectBookToWebsocket,
  connectTickerToWebsocket,
  connectTradesToWebsocket,
  killWebsocket,
  startWebsocket,
  updateBook,
  updateTicker,
  updateTrade,
} from '../../../state/redux/actions'
import OrderBook from '../../molecules/OrderBook'
import Ticker from '../../molecules/Ticker'
import Trades from '../../molecules/Trades'

const Dashboard = () => {
  const dispatch = useDispatch()
  const ws = useSelector(state => state.ws)

  useEffect(() => {
    if (!ws.dead) {
      let msg
      ws.ws.onopen = () => {
        msg = {
          event: 'subscribe',
          channel: 'book',
          symbol: 'tBTCUSD',
          prec: 'P2',
          freq: 'F1',
          len: 25,
        }
        ws.ws.send(JSON.stringify(msg))
        msg = {
          event: 'subscribe',
          channel: 'trades',
          symbol: 'tBTCUSD',
        }
        ws.ws.send(JSON.stringify(msg))
        msg = {
          event: 'subscribe',
          channel: 'ticker',
          symbol: 'tBTCUSD',
        }

        ws.ws.send(JSON.stringify(msg))
      }

      ws.ws.onmessage = e => {
        const parsedData = JSON.parse(e.data)

        if (parsedData.event === 'subscribed' && parsedData.channel === 'book') {
          dispatch(connectBookToWebsocket)
        } else if (parsedData.event === 'subscribed' && parsedData.channel === 'trades') {
          dispatch(connectTradesToWebsocket)
        } else if (parsedData.event === 'subscribed' && parsedData.channel === 'ticker') {
          dispatch(connectTickerToWebsocket)
        } else if (parsedData[1].length === 10) {
          dispatch(updateTicker(parsedData[1]))
        } else if (parsedData[1].length === 50) {
          dispatch(addInitialBook(parsedData[1]))
        } else if (parsedData[1].length === 30) {
          dispatch(addInitialTrades(parsedData[1], parsedData[0]))
        } else if (parsedData[1] === 'tu') {
          dispatch(updateTrade(parsedData[2]))
        } else if (parsedData[1].length === 3) {
          dispatch(updateBook(parsedData[1]))
        }
      }

      ws.ws.onerror = e => {
        console.log(e.message)
      }

      ws.ws.onclose = e => {
        console.log(e.code, e.reason)
      }
    }
  }, [ws.dead])

  const toggleWS = () => {
    if (ws.dead) {
      dispatch(startWebsocket())
    } else {
      dispatch(killWebsocket())
    }
  }

  return (
    <Box>
      <Flex>
        <Ticker />
        <Button onClick={toggleWS}>{ws.dead ? 'START WS' : 'KILL WS'}</Button>
      </Flex>
      <Flex>
        <Box width="70%">
          <OrderBook />
        </Box>
        <Box width="30%">
          <Trades />
        </Box>
      </Flex>
    </Box>
  )
}

export default Dashboard
