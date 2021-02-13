import { Box, Flex, Text } from 'bumbag'
import React from 'react'
import { useSelector } from 'react-redux'
import { BiBitcoin } from 'react-icons/bi'
import { AiFillCaretDown } from 'react-icons/ai'

const Ticker: React.FC = () => {
  const ticker = useSelector(state => state.ticker)
  return (
    <Flex
      height="55px"
      width="312px"
      alignItems="center"
      backgroundColor="grey500"
      color="white600"
      fontWeight="Light"
      lineHeight="1"
    >
      <Box marginX="10px" paddingY="7px">
        <BiBitcoin fontSize={40} />
      </Box>
      <Flex width="100%">
        {ticker.fetched ? (
          <>
            <Flex flexDirection="column" width="50%">
              <Text textDecoration="underline">BTC/USD</Text>
              <Text fontSize="100">
                VOL <Text textDecoration="underline">{Math.ceil(ticker.vol).toLocaleString()}</Text> USD
              </Text>
              <Text fontSize="100">LOW {Math.ceil(ticker.low).toLocaleString()}</Text>
            </Flex>
            <Flex flexDirection="column" width="50%">
              <Text>{ticker.bid.toLocaleString()}</Text>
              <Flex fontSize="100" color={ticker.change > 0 ? 'green500' : 'red500'} alignItems="center">
                <Text marginRight="xs">{ticker.change.toFixed(2)}</Text>
                <AiFillCaretDown />
                <Text marginLeft="xs">({ticker.change_percent.toFixed(2)}%)</Text>
              </Flex>
              <Text fontSize="100">HIGH {Math.ceil(ticker.high).toLocaleString()}</Text>
            </Flex>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </Flex>
    </Flex>
  )
}

export default Ticker
