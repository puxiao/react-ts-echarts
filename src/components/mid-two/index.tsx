import React from 'react'
import { EChartOption } from 'echarts'
import Echart from '../echart'

const option: EChartOption = {
    radar: [
        {
            indicator: [
                { text: '周一' },
                { text: '周二' },
                { text: '周三' },
                { text: '周四' },
                { text: '周五' }
            ],
            center: ['28%', '54%'],
            radius: '58%',
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            nameGap : 6,
            name: {
                formatter: '{value}',
                textStyle: {
                    color: 'rgba(255,255,255,0.6)'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                        'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                        'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        {
            indicator: [
                { text: '闲置', max: 150 },
                { text: '正常', max: 150 },
                { text: '维修', max: 150 },
                { text: '报废', max: 120 },
                { text: '征调', max: 108 },
                { text: '特殊', max: 72 }
            ],
            center: ['75%', '52%'],
            radius: '60%',
            nameGap : 6
        }
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 4
                }
            },
            data: [
                {
                    value: [100, 8, 0.40, -80, 2000],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                {
                    value: [60, 5, 0.30, -100, 1500],
                    name: '图二',
                    areaStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            ]
        },
        {
            type: 'radar',
            name: '预算与开销',
            radarIndex: 1,
            data: [
                {
                    value: [120, 118, 130, 100, 99, 70],
                    name: '预算分配',
                    label: {
                        show: true,
                        formatter: function(params:any) {
                            return params.value;
                        }
                    }
                },
                {
                    value: [90, 113, 140, 30, 70, 60],
                    name: '实际开销'
                }
            ]
        }
    ]
}

const MidTwo: React.FC = () => {
    return (
        <Echart option={option} />
    )
}

export default MidTwo