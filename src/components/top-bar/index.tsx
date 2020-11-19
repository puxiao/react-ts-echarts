import React, { useState, useEffect } from 'react'

import './index.scss'

const TopBar: React.FC = () => {

    const [time, setTime] = useState<string>('')

    useEffect(() => {
        const timer = window.setInterval(() => {
            setTime(new Date(Date.now() + 8 * 60 * 60 * 1000).toJSON().substr(0, 19).replace('T', ' '))
        }, 1000)
        return () => {
            window.clearInterval(timer)
        }
    }, [])

    return (
        <div className='topbar'>
            <span>欢迎使用本系统</span>
            <span>城市公车调度大数据系统</span>
            <span>{time}</span>
        </div>
    )
}

export default TopBar