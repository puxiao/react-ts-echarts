import echarts, { EChartOption } from 'echarts'

export const option: EChartOption = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: 'rgb(255,0,0,1)'
            }
        },
        axisLabel: {
            color: 'green'
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgb(255,0,0,1)'
            }
        },
        axisLabel: {
            color: 'blue'
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        itemStyle: {
            // 设置扇形的颜色
            //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                        offset: 0, color: 'rgba(255, 0, 0, 0)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgb(255,0,0,0.6)' // 100% 处的颜色
                    }]
                ),
                label: {
                    color: 'rgb(255,0,0,1)'
                },
                lineStyle: {
                    color: 'rgb(255,0,0,1)',
                    opacity: 0.8,
                    width: 2
                },
                borderColor: 'rgba(255,0,0,1)',
                borderWidth: '2'
            }
        },
        areaStyle: {}
    }]
}