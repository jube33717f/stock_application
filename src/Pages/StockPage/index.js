import React,{ useState,useEffect } from 'react';
import 'antd/dist/antd.css';
import  Header  from '../../Components/Menu';
import { Link } from 'react-router-dom';
import './style.css'
import { Table, Input,Select} from 'antd';
import { getStocks } from '../../Apis'
const { Search } = Input;
const { Option } = Select;
import { readString } from 'react-papaparse';
import csvfile from '../../Assets/nasdaq_stock_list.csv'; 
import {  FormOutlined, DotChartOutlined } from '@ant-design/icons';

const StockPage = ()=> {
    const [displayStocks,setDisplayStocks] = useState([])
    const [stocks,setStocks] = useState([])
    const [category, setCategory] = useState([])


    
    useEffect(()=>{
        //read local csv data
          const papaConfig = {
            complete: (results, file) => {
                let categories = new Set()
                const arr = results.data.slice(1).map(i=>{
                    
                  
                    const symbol = i[0]
                    const name = i[1]
                    const industry = i[9]
                    if(industry){
                        categories.add(industry)
                    }
                    
                    return {
                                Stock:symbol,
                                Name:name,
                                Industry:industry 
                            }

                })
                setStocks(arr)
                setDisplayStocks(arr)
                setCategory([...categories])
            },
            download: true,
            error: (error, file) => {
              console.log('Error while parsing:', error, file);
            },
          };
          readString(csvfile, papaConfig);
        
        // console.log(json)
        // const req = await getStocks();
        // let categories = new Set()
        // const arr =req.data.filings.map(i=>{
        //     const symbol = i.company.ticker
        //     const name= i.company.name
        //     const industry = i.industry_category

        //     categories.add(industry)
        //     return {
        //         Stock:symbol,
        //         Name:name,
        //         Industry:industry 
        //     }
        // })
        // setStocks(arr)
        // setCategory([...categories])
        // setDisplayStocks(arr)
    },[])
    //search data [click event]
    const onSearch = async (value) => {
        if(value){
            const keywords = value.toUpperCase()
            const arr = stocks.filter(i=>i.Stock.includes(keywords))
            setDisplayStocks(arr)
        }else{
            setDisplayStocks(stocks)
        }
        
    };

    //input onChange
    function handleChange(value) {
        
        let arr = []   
        value.map(i=>{   
            arr = arr.concat(stocks.filter(j=>j.Industry==i))
        })
        setDisplayStocks(arr)
    }
  
    // setup the table columns
    const columns = [
        {
          title: 'Stock [Click to history price page]',
          dataIndex: 'Stock',
          key: 'Stock',
          render: text => <>{text} <Link to={`/quote/${text}`}><FormOutlined/>quote</Link> <Link to={`/price_history/${text}`}><DotChartOutlined/>history</Link></>,
        },
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
          
        },
        {
          title: 'Industry',
          dataIndex: 'Industry',
          key: 'Industry',
        }]
    
    return (
        <>
            <Header/>
            <div className='searchSection'>
                <Search
                    placeholder="Input stock keywords"
                    allowClear
                    style={{ width: '40%' }}
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    />
                    
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: '40%' ,paddingTop:'5px'}}
                        placeholder="Select industry"
                        defaultValue={[]}
                        onChange={handleChange}
                        >
                        {category.map(i=><Option value={i}>{i}</Option>)}
                        
                    </Select>
            </div>
            <p>stocks: click single stock move to its price history page</p>
            <Table columns={columns} dataSource={displayStocks}/>
        </>
    );
};
export default StockPage;