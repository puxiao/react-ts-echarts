import React from 'react'
import { EChartOption } from 'echarts'
import 'echarts/extension/bmap/bmap'
import Echart from '../echart'

type dataType = {
    name: string,
    value: number
}[]

const data: dataType = [
    { name: '廊坊', value: 193 },
    { name: '菏泽', value: 194 },
    { name: '合肥', value: 229 },
    { name: '武汉', value: 273 },
    { name: '大庆', value: 279 }
];

type geoCoorMapType = { [key: string]: number[] }
const geoCoordMap: geoCoorMapType = {
    '廊坊': [116.7, 39.53],
    '菏泽': [115.480656, 35.23375],
    '合肥': [117.27, 31.86],
    '武汉': [114.31, 30.52],
    '大庆': [125.03, 46.58]
};

let convertData = function (data: dataType) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

interface MapECartOption extends EChartOption {
    bmap?: object
}

const option: MapECartOption = {
    tooltip: {},
    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyleV2: {
            styleId: '86249896ec18867e1ef906a088e8b9b1'
        }
    },
    series: [
        {
            name: 'PM2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val: any) {
                return val[2] / 10;
            },
            itemStyle: {
                normal: {
                    color: '#c23531'
                }
            }
        },
        {
            name: 'top5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function (val: any) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            itemStyle: {
                normal: {
                    color: '#c23531'
                }
            }
        }
    ]
}

const MidOne: React.FC = () => {
    return (
        <Echart option={option} />
    )
}

export default MidOne