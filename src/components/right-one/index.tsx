import { EChartOption } from 'echarts';
import React from 'react'
import Echart from '../echart'

let xAxisData = [];
let data1 = [];
let data2 = [];
for (let i = 0; i < 100; i++) {
    xAxisData.push('类目' + i);
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
}

const option: EChartOption = {
    grid: {
        left: '4%',
        right: '6%',
        top: '12%',
        bottom: '6%',
        containLabel: true
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.5)'
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.5)'
            }
        }
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx:any) {
            return idx * 10
        }
    }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx:any) {
            return idx * 10 + 100
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx:any) {
        return idx * 5
    }
}

const RightOne: React.FC = () => {
    return (
        <Echart option={option} />
    )
}

export default RightOne