# STOCKS APPLICATION
> Author: 
> 
> Last edit date: 2021.4.14


# HOW TO USE
open the directory and run:
`npm install`
`npm start`

or:
[link](https://stock-application-5wfmwibxh-jubi33717f.vercel.app/)

## Pages/Routes
### [/stock] Display all stock data from local csv file

read data from local csv

* functionalities:
*  _search by key words_ return stocks (symbol) which includes keywords without hit server again
*  _select industry_ return stocks which equal selected industries
*  _history logo_ redirect to price history page
*  _quote logo_ redirect to quote page

### [/price_history/*] Display single stock price history
get data by third party api
functionalities:
*  _select from date_ return price history from selected date
*  _table_ shows single stock price history
*  _line chart_ shows single stock close price history

### [/quote/*] Display single stock quote 
get data by third party api
