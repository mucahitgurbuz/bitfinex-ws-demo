import { Flex, Box, Text } from 'bumbag'
import React from 'react'
import { useSelector } from 'react-redux'
import { FaChevronDown } from 'react-icons/fa'

const header = (isReverse: boolean) => (
  <Flex color="grey300" fontSize="100" flexDirection={isReverse ? 'row-reverse' : 'row'}>
    <Box flexBasis="30%" justifySelf="center">
      COUNT
    </Box>
    <Box flexBasis="30%" justifySelf="center">
      AMOUNT
    </Box>
    <Box flexBasis="30%" justifySelf="center">
      TOTAL
    </Box>
    <Box flexBasis="30%" justifySelf="center">
      PRICE
    </Box>
  </Flex>
)

const OrderBook: React.FC = () => {
  const orderBook = useSelector(state => state.orderBook)

  let totalBid = 0
  let totalAsk = 0
  const absoluteTotalA = orderBook.total_a
  const absoluteTotalB = orderBook.total_b
  const absoluteTotal = absoluteTotalB - absoluteTotalA
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
        <Text marginLeft="5px">ORDER BOOK</Text>
        <Text marginLeft="5px" opacity="0.6">
          BTC/USD
        </Text>
      </Flex>
      <Flex width="100%">
        <Box width="50%">
          {header(false)}
          {orderBook.fetched ? (
            orderBook.bids.map(bid => {
              totalBid += bid[2]
              const ratio = ((totalBid / absoluteTotal) * 100).toFixed(0)
              const background_str = 'linear-gradient(to left, #354430 ' + ratio + '%, #1b262d ' + 0 + '%)'
              return (
                <Flex color="white" fontSize="100" background={background_str}>
                  <Box flexBasis="30%" justifySelf="center">
                    {bid[1].toFixed(0)}
                  </Box>
                  <Box flexBasis="30%" justifySelf="center">
                    {bid[2].toFixed(4)}
                  </Box>
                  <Box flexBasis="30%" justifySelf="center">
                    {totalBid.toFixed(3)}
                  </Box>
                  <Box flexBasis="30%" justifySelf="center">
                    {Math.ceil(bid[0]).toLocaleString()}
                  </Box>
                </Flex>
              )
            })
          ) : (
            <Text>Loading...</Text>
          )}
        </Box>
        <Box width="50%">
          {header(true)}
          {orderBook.fetched ? (
            orderBook.asks.map(ask => {
              totalAsk += -1 * ask[2]
              const ratio = (totalAsk / absoluteTotal) * 100
              const background_str =
                'linear-gradient(to left, #1b262d ' + (100 - ratio) + '%, #472c2c ' + 0 + '%)'
              return (
                <Flex color="white" fontSize="100" background={background_str}>
                  <Box flexBasis="30%" justifySelf="center">
                    {Math.ceil(ask[0]).toLocaleString()}
                  </Box>
                  <Box flexBasis="30%" justifySelf="center">
                    {totalAsk.toFixed(3)}
                  </Box>
                  <Box flexBasis="30%" justifySelf="center">
                    {Math.abs(ask[2]).toFixed(4)}
                  </Box>
                  <Box flexBasis="30%" justifySelf="center">
                    {ask[1].toFixed(0)}
                  </Box>
                </Flex>
              )
            })
          ) : (
            <Text>Loading...</Text>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

export default OrderBook
