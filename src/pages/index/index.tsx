import React from 'react'
import LeftOne from '../../components/left-one'
import LeftTwo from '../../components/left-two'
import LeftThree from '../../components/left-three'
import MidOne from '../../components/mid-one'
import MidTwo from '../../components/mid-two'
import MidThree from '../../components/mid-three'
import RightOne from '../../components/right-one'
import RightTwo from '../../components/right-two'
import RightThree from '../../components/right-three'

import './index.scss'
import TopBar from '../../components/top-bar'

const IndexPage: React.FC = () => {
    return (
        <div className='main-grid'>
            <div className='grid-item top-bar'><TopBar /></div>
            <div className='grid-item left-one'><LeftOne /></div>
            <div className='grid-item left-two'><LeftTwo /></div>
            <div className='grid-item mid-one'><MidOne /></div>
            <div className='grid-item right-one'><RightOne /></div>
            <div className='grid-item right-two'><RightTwo /></div>
            <div className='grid-item left-three'><LeftThree /></div>
            <div className='grid-item mid-two'><MidTwo /></div>
            <div className='grid-item mid-three'><MidThree /></div>
            <div className='grid-item right-three'><RightThree /></div>
        </div>
    )
}

export default IndexPage