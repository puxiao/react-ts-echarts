import echarts, { EChartOption } from 'echarts';
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
        boundaryGap: false,
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
            max: 100,
            interval: 20,
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
    series: [
        {
            name: '工作班车',
            type: 'line',
            stack: '总量',
            data: [116, 132, 107, 134, 95, 236, 214],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [{
                            offset: 0, color: 'rgba(145, 199, 174, 0)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgb(145, 199, 174,0.6)' // 100% 处的颜色
                        }]
                    ),
                    lineStyle: {
                        color: 'rgb(145, 199, 174,1)',
                        opacity: 0.8,
                        width: 2
                    },
                    borderColor: 'rgba(145, 199, 174,1)',
                    borderWidth: '2'
                }
            },
            areaStyle: {}
        },
        {
            name: '机要通信',
            type: 'line',
            stack: '总量',
            data: [226, 182, 191, 234, 297, 333, 315],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [{
                            offset: 0, color: 'rgba(97, 160, 168, 0)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgb(97, 160, 168,0.6)' // 100% 处的颜色
                        }]
                    ),
                    lineStyle: {
                        color: 'rgb(97, 160, 168,1)',
                        opacity: 0.8,
                        width: 2
                    },
                    borderColor: 'rgba(97, 160, 168,1)',
                    borderWidth: '2'
                }
            },
            areaStyle: {}
        },
        {
            name: '应急和特种专业技术用车',
            type: 'line',
            stack: '总量',
            data: [149, 234, 301, 157, 192, 333, 414],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0,
                        [{
                            offset: 0, color: 'rgba(194,53,49, 0)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgb(194,53,49,0.6)' // 100% 处的颜色
                        }]
                    ),
                    lineStyle: {
                        color: 'rgb(194,53,49,1)',
                        opacity: 0.8,
                        width: 2
                    },
                    borderColor: 'rgba(194,53,49,1)',
                    borderWidth: '2'
                }
            },
            areaStyle: {}
        }
    ],
};

const LeftTwo: React.FC = () => {
    return (
        <Echart option={option} />
    )
}

export default LeftTwo