import React,{useEffect, useState} from 'react';

import { Button,Menu } from 'antd';
import { HomeOutlined, StockOutlined , FormOutlined, DotChartOutlined , Loading3QuartersOutlined, InteractionOutlined} from '@ant-design/icons';
import { Link,useHistory } from 'react-router-dom';
import './style.css'

const Header = ()=> {
    let history = useHistory();
    const curr = history.location.pathname.replace('/','')
    const [current,setCurrent]=useState(curr)
    const handleClick = e => {      
        setCurrent(e.key);
    };

    return (
        <Menu mode="horizontal" selectedKeys={[current]} onClick={handleClick}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="stock"  icon={<StockOutlined />}>
                <Link to='/stock'>Stock</Link>
            </Menu.Item>
            <Menu.Item key="quote"  icon={<FormOutlined />}>
                <Link to='/quote'>Quote</Link>
            </Menu.Item>
            <Menu.Item key="price_history"  icon={<DotChartOutlined />}>
                <Link to='/price_history'>Price History</Link>
            </Menu.Item>
           
            <Menu.Item className='btn' icon={<Loading3QuartersOutlined />}>
                <Link to='/login'>Login</Link>
            </Menu.Item>
            <Menu.Item className='btn' icon={<InteractionOutlined />}>
                <Link to='/register'>Register</Link>
            </Menu.Item>
      </Menu>
    );
};
export default Header;