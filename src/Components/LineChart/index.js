import React,{useEffect} from 'react';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  } from 'chart.js';
Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
  );

// Chart.register.apply(null, Object.values(Chart).filter((chartClass) => (chartClass.id)));


// new ChartJs.Chart()

const LineChart = (state)=>{
    useEffect(()=>{
        const source = state.state
     
        const d = source.map(i=>i.y)
        const l = source.map(i=>i.x)
        console.log(l)
        console.log('**')
        console.log(d)
        const data = {
            labels: l,
              datasets: [
                {
                  label: "close price",
                  data: d,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }
              ]
        }
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Stock close price'
                }
                }
            },
        }
        
        let ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, config);
    },[])
    return <div style={{height:'40em;'}}>
        <canvas id="myChart" width="400" height="150"></canvas>
      </div>
}


export default LineChart;