import { EChartOption } from 'echarts'
import React from 'react'
import Echart from '../echart'

const option: EChartOption = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '1%',
        right: '1%',
        top: '8%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.6)'
            }
        }
    },
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.6)'
                }
            }
        },
        {
            type: 'value',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value}%'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.6)'
                }
            }
        }
    ],
    series: [{
        type: 'bar',
        barWidth: '30%',
        data: [120, 220, 150, 80, 70, 110, 130],
    }]
}

const LeftThree: React.FC = () => {
    return (
        <Echart option={option} />
    )
}

export default LeftThree