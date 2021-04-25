import axios from "axios";
const ALPHAVATAGE = 'https://www.alphavantage.co'
// const INTRINIO = 'https://api-v2.intrinio.com'
const ALPHAVATAGE_Key = 'BKCDEVXOJYETOG2M'
//const INTRINIO_Key = 'OmFiNGE3MjJkNWJkMjA4MDc0N2NmYjliN2VkMmI2OWUw'


// export const searchStocks = async (keywords)=>
//      axios.get(`${INTRINIO}/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_Key}`)

// export const getStocks = async () =>
//     axios.get(`${INTRINIO}/filings?api_key=${INTRINIO_Key}`)

export const getStockHistoryPrice = async(symbol)=>
    axios.get(`${ALPHAVATAGE}/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${ALPHAVATAGE_Key}`)

export const getStockQuote = async(symbol)=>
    axios.get(`${ALPHAVATAGE}/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHAVATAGE_Key}`)