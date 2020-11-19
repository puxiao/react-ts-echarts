import React, { useState, useRef, useEffect } from 'react'
import echarts, { EChartOption, ECharts } from 'echarts'

export type EchartProp = {
    option: EChartOption,
    key?: string,
    style?: {
        width: string,
        height: string
    }
    className?: string
}

const removeUndefined = (obj: object) => {
    for (let key in obj) {
        if (obj[key as keyof typeof obj] === undefined) {
            delete obj[key as keyof typeof obj]
        }
    }
    return obj
}

const Echart: React.FC<EchartProp> = ({ option, key, className, style = { width: '100%', height: '100%' } }) => {

    const chartRef = useRef<HTMLDivElement>(null)
    const [echartsInstance, setEchartsInstance] = useState<ECharts>()

    useEffect(() => {
        setEchartsInstance(echarts.init(chartRef.current as HTMLDivElement))
    }, [])

    useEffect(() => {
        const handleResize = () => {
            echartsInstance?.resize()
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [echartsInstance])

    useEffect(() => {
        echartsInstance?.setOption(option)
    }, [echartsInstance, option])

    return (
        <div ref={chartRef} {...removeUndefined({ option, key, className, style })} />
    )
}

export default Echart