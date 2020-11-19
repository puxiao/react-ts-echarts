import { EChartOption } from 'echarts'
import React from 'react'
import Echart from '../echart'

const option:EChartOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        top: 'center'
    },
    legend: {
        orient: 'vertical',
        left: '3%',
        top: '3%',
        data: ['车型A', '车型B', '车型C', '车型D', '车型E'],
        textStyle: {
            color: 'rgba(255,255,255,0.6)'
        }
    },

    series: [
        {
            name: '漏斗图',
            type: 'funnel',
            width: '30%',
            height: '40%',
            left: '8%',
            top: '51%',
            funnelAlign: 'right',

            center: ['25%', '25%'],  // for pie

            data: [
                {value: 60, name: '车型C'},
                {value: 30, name: '车型D'},
                {value: 10, name: '车型E'},
                {value: 80, name: '车型B'},
                {value: 100, name: '车型A'}
            ]
        },
        {
            name: '金字塔',
            type: 'funnel',
            width: '30%',
            height: '40%',
            left: '8%',
            top: '11%',
            sort: 'ascending',
            funnelAlign: 'right',

            center: ['25%', '75%'],  // for pie

            data: [
                {value: 60, name: '车型C'},
                {value: 30, name: '车型D'},
                {value: 10, name: '车型E'},
                {value: 80, name: '车型B'},
                {value: 100, name: '车型A'}
            ]
        },
        {
            name: '漏斗图',
            type: 'funnel',
            width: '30%',
            height: '40%',
            left: '55%',
            top: '11%',
            funnelAlign: 'left',

            center: ['75%', '25%'],  // for pie

            data: [
                {value: 60, name: '车型C'},
                {value: 30, name: '车型D'},
                {value: 10, name: '车型E'},
                {value: 80, name: '车型B'},
                {value: 100, name: '车型A'}
            ]
        },
        {
            name: '金字塔',
            type: 'funnel',
            width: '30%',
            height: '40%',
            left: '55%',
            top: '51%',
            sort: 'ascending',
            funnelAlign: 'left',

            center: ['75%', '75%'],  // for pie

            data: [
                {value: 60, name: '车型C'},
                {value: 30, name: '车型D'},
                {value: 10, name: '车型E'},
                {value: 80, name: '车型B'},
                {value: 100, name: '车型A'}
            ]
        }
    ]
}

const RightThree:React.FC= () =>{
    return (
        <Echart option={option} />
    )
}

export default RightThree