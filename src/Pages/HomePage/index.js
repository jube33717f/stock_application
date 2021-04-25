import React from 'react';
import  Header  from '../../Components/Menu';


import './style.css';


const HomePage = ()=> {
    
    return (
        <>
            <Header/>
            <section>
                <div className='backgroundImg'>
                    <div className='text'>
                        <h1 style={{color:'#fff'}}>Stock Market Portal</h1>
                        <p><span>Welcome to the Stock Market Portal.</span><br/>
                            You may click on stocks to view all the available companies
or Quote to get the latest price information by stock symbol, or choose Price History or search to
sample from the most recent one hundred days of information for a particular stock. 
                        </p>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
            
        </>
    );
};
export default HomePage;