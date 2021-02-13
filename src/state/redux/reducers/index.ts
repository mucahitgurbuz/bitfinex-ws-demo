import { combineReducers } from "redux";
import orderBook from "./orderBook";
import ticker from './ticker';
import trades from './trades';
import ws from './ws';

export default combineReducers({ orderBook, ticker, trades, ws });
