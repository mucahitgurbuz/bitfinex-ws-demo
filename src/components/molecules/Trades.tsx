import { Box, Flex, Text } from 'bumbag'
import React from 'react'
import { useSelector } from 'react-redux'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import dayjs from 'dayjs'

const map = (value: number, x1: number, y1: number, x2: number, y2: number) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2

const Trades: React.FC = () => {
  const trades = useSelector(state => state.trades)

  return (
    <Flex
      flexDirection="column"
      height="100%"
      width="100%"
      backgroundColor="grey500"
      color="white"
      padding="5px"
    >
      <Flex height="32px" alignItems="center">
        <FaChevronDown opacity="0.6" />
        <Text marginLeft="5px">TRADES</Text>
        <Text marginLeft="5px" opacity="0.6">
          BTC/USD
        </Text>
      </Flex>
      <Flex color="grey300" fontSize="100">
        <Box flexBasis="10%"></Box>
        <Box flexBasis="30%">TIME</Box>
        <Box flexBasis="30%">PRICE</Box>
        <Box flexBasis="30%">AMOUNT</Box>
      </Flex>
      {trades.fetched ? (
        trades.trades.map(trade => (
          <Flex
            key={trade[0].toString()}
            fontSize="100"
            background={
              trade[2] > 0
                ? `rgb(22,177,87,${map(Math.abs(trade[2]), 0, 0.25, 0, 1)})`
                : `rgb(240,83,89,${map(Math.abs(trade[2]), 0, 0.25, 0, 1)})`
            }
          >
            <Box flexBasis="10%">
              {trade[2] > 0 ? <FaChevronUp color="green" /> : <FaChevronDown color="red" />}
            </Box>
            <Box flexBasis="30%">{dayjs(trade[1]).format('hh:mm:ss')}</Box>
            <Box flexBasis="30%">{Math.ceil(trade[3]).toLocaleString()}</Box>
            <Box flexBasis="30%">{Math.abs(trade[2].toFixed(4))}</Box>
          </Flex>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </Flex>
  )
}

export default Trades
