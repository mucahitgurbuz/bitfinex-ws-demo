const initial_state = {
  connected_trades: false,
  trades: null,
  trade_ids: null,
  trade_id: null,
  fetched: false,
}

const trades = (state = initial_state, action) => {
  let ids=[];
  switch (action.type) {
    case 'CONNECTED_TRADES':
      return {...state, connected_trades: true}
    case 'INITIAL_TRADES':
      for (let i = 0; i < action.payload.length; i++) {
        ids.push(action.payload[i][0])
      }
      return {...state, trades: action.payload, trade_ids: ids, trade_id: action.id, fetched: true}
    case 'UPDATE_TRADE':
      ids = state.trade_ids;
      let trades = state.trades;
      if (!ids.includes(action.payload[0])) {
        trades.pop();
        trades.unshift(action.payload)
        ids.unshift(action.payload[0])
      }
      return {...state, trades: trades, trade_ids: ids}
    default:
      return state;
  }
}

export default trades
