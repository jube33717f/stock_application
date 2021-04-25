import React, { Suspense } from 'react';
import { Route, Redirect, HashRouter as Router, Switch } from 'react-router-dom';
import { Row, Col } from 'antd';
import './style.css';

/* <------------------------------------ **** Lazy Loading all the pages START **** ------------------------------------ */

const HomePage = React.lazy(() => import( '../Pages/HomePage'));
const StockPage = React.lazy(()=> import( '../Pages/StockPage'));
const QuotePage = React.lazy(()=> import( '../Pages/QuotePage'));
const PriceHistoryPage = React.lazy(()=> import( '../Pages/PriceHistoryPage'));
const Login = React.lazy(()=> import( '../Pages/Login'));
const Register = React.lazy(()=> import( '../Pages/Register'));
/* <------------------------------------ **** Lazy Loading all the pages END **** ------------------------------------ */

const RootRouter = () => {
    return (
        <Suspense
            fallback={
                /* <------------------------------------ **** Loading Animation START **** ------------------------------------ */
                <div>
                    <div>
                        <Row className='loadingWrapper' align="middle">
                            <Col className='loadingFormCol'>
                                <div className='loadingPageWrapper'>
                                    <div className='loadingPageTitle'>Stock Application</div>
                                    <div className='loadingAnimation'>
                                        <div className='cubeGrid'>
                                            <div className='loadingCube1' />
                                            <div className='loadingCube2' />
                                            <div className='loadingCube3' />
                                            <div className='loadingCube4' />
                                            <div className='loadingCube5'/>
                                            <div className='loadingCube6' />
                                            <div className='loadingCube7'/>
                                            <div className='loadingCube8' />
                                            <div className='loadingCube9' />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                /* <------------------------------------ **** Loading Animation END **** ------------------------------------ */
            }
        >
            <Router>
                <Switch>
                    <Redirect exact from="/home" to="/" />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/stock" exact component={StockPage} />
                    <Route path="/quote" exact component={QuotePage} />
                    <Route path="/price_history" exact component={PriceHistoryPage} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                </Switch>
                    <Route path="/price_history/*" component={PriceHistoryPage} />
                    <Route path="/quote/*" component={QuotePage} />
            </Router>
        </Suspense>
      
    );
};

export default RootRouter;