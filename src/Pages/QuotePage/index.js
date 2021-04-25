import React,{useEffect,useState} from 'react';
import 'antd/dist/antd.css';
import { useHistory } from "react-router-dom";
import  Header  from '../../Components/Menu';
import {getStockQuote} from '../../Apis'
import { List, Avatar } from 'antd';
const QuotePage = ()=> {
    let history = useHistory();
    const symbol = history.location.pathname.replace('/quote/','')
    const [data,setData] = useState([])
    useEffect(async()=>{
        const req = await getStockQuote(symbol)
        setData([
            {title:'Symbol',item:req.data['Global Quote']['01. symbol']},
            {title:'Open',item:req.data['Global Quote']['02. open']},
            {title:'High',item:req.data['Global Quote']['03. high']},
            {title:'Low',item:req.data['Global Quote']['04. low']},
            {title:'Price',item:req.data['Global Quote']['05. price']},
            {title:'Volume',item:req.data['Global Quote']['06. volume']},
            {title:'Last trading day',item:req.data['Global Quote']['07. latest trading day']},
            {title:'Previous close',item:req.data['Global Quote']['08. previous close']},
            {title:'Change',item:req.data['Global Quote']['09. change']},
            {title:'Change percent',item:req.data['Global Quote']['10. change percent']}
        ])
    },[])
    return (
        <>
            <Header/>
            <p style={{paddingLeft:'3em',color:'#1890ff'}}>{symbol==='/quote'?'Pl select a stock from stock page first':`Quote of ${symbol}`}</p>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar='💹'
                        title={item.title}
                        description={item.item}
                    />
      </List.Item>
    )}
  />,
        </>
    );
};
export default QuotePage;