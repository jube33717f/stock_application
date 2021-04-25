import React, { useState,useEffect } from 'react';
import './style.css'
import { Table, Menu, Dropdown ,DatePicker, Space, Button } from 'antd';
import  Header  from '../../Components/Menu';
import { useHistory } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import  LineChart  from '../../Components/LineChart'
import {getStockHistoryPrice} from '../../Apis'
// import LineChart from 'react-linechart';
// import '../node_modules/react-linechart/dist/styles.css';
const PriceHistoryPage = ()=> {
    let history = useHistory();
    const symbol = history.location.pathname.replace('/price_history/','')

    //data setup
    const [data,setData] = useState([])
    //date selecting/filter
    const [choosingDate,setChoosingDate] = useState('')
    //chose show table or line chart
    const [show,setShow] = useState('Table')
    //line chart label setup
    const [dataState,setDataState]=useState([])
    
    
    function onChange(date, dateString) {
        setChoosingDate(dateString)
    }

    useEffect(async()=>{
        const req = await getStockHistoryPrice(symbol)
        // console.log(req.data["Time Series (Daily)"])
        let arr = []
        let st = []
        for(let key in req.data["Time Series (Daily)"]){

            arr.push({
                Date:key,
                Open: req.data["Time Series (Daily)"][key]["1. open"],
                High: req.data["Time Series (Daily)"][key]["2. high"],
                Low: req.data["Time Series (Daily)"][key]["3. low"],
                Close: req.data["Time Series (Daily)"][key]["4. close"],
                Volume: req.data["Time Series (Daily)"][key]["5. volume"]
            })
            st.push({x:key,y:req.data["Time Series (Daily)"][key]["4. close"]})
        }
       
        setData(arr)
        
        setDataState(st)
        


        
    },[])
    //two data form choices
    const menu = (
        <Menu>
          <Menu.Item onClick={()=>{setShow('Table')}}>
            <p>Table</p>           
          </Menu.Item>
          
          <Menu.Item onClick={()=>{setShow('Line Chart')}}>
              <p>Line Chart</p>
          </Menu.Item>
        </Menu>
      );

    // setup the table columns
    const columns = [
        {
          title: 'Date',
          dataIndex: 'Date',
          key: 'Date',
         
        },
        {
          title: 'Open',
          dataIndex: 'Open',
          key: 'Open',
        },
        {
          title: 'High',
          dataIndex: 'High',
          key: 'High',
        },
        {
          title:'Low',
          dataIndex: 'Low',
          key: 'Low',
        },
        {
          title:'Close',
          dataIndex: 'Close',
          key: 'Close',
        },
        {
          title:'Volume',
          dataIndex: 'Volume',
          key: 'Volume',
        }
    ]

    //setup line charts data
    
    return (
        <>
        <Header/>
        <Space direction="vertical" className='contentSection'>
            
            <section >
            <DatePicker onChange={onChange} /> 
            <Button type="primary" onClick={()=>{
                const arr = data.filter(i=>i.Date>choosingDate)

                setData(arr)    
                setDataState(arr.map(i=>{
                    return {
                        x:i.Date,
                        y:i.Close
                    }
                }))
                

            }}>Search</Button>
            
            </section>
            <section style={{display:'flex'}}>
                Select data form here: 
            <Dropdown overlay={menu}>
                <p>{show} <DownOutlined /></p>
            </Dropdown>
            
            <p style={{paddingLeft:'3em',color:'#1890ff'}}>{symbol!=='/price_history'?`Showing stocks for the ${symbol}`:`pl select a stock from stock page first`}</p>
            </section>
            {show==='Table'?<section>
                <Table  columns={columns} dataSource={data}/></section>:<section className='chartSection'>
                {dataState&&<LineChart state={dataState}/>}
                
                </section>}
        </Space>
        </>
    );
};
export default PriceHistoryPage;