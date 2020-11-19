import { EChartOption } from 'echarts'
import React from 'react'
import Echart from '../echart'

const option: EChartOption = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    grid: {
        left: '1%',
        right: '1%',
        top: '8%',
        bottom: '4%',
        containLabel: true
    },
    series: [
        {
            type: 'gauge',
            name: '业务指标',
            radius: '80%',
            center: ['50%', '55%'],
            axisLine: {
                lineStyle: {
                    width: 12
                }
            },
            axisTick: {
                length: 15,
            },
            splitLine: {
                length: 20,
            },
            axisLabel: {
                backgroundColor: 'auto',
                borderRadius: 2,
                color: '#eee',
                padding: 3,
                textShadowBlur: 2,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                textShadowColor: '#ccc'
            },
            detail: { formatter: '{value}%' },
            data: [{ value: 66, name: '使用率' }]
        }
    ]
}

const LeftOne: React.FC = () => {
    return (
        <Echart option={option} />
    )
}

export default LeftOne