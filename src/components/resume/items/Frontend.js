import React from 'react'
import {
    LaptopOutlined
} from '@ant-design/icons'
import './items.css'

export default function Frontend() {
    return (
        <div className="university-container">
            <div>
                <strong className="university-name">Company</strong> <span className="university-time">2019</span>
            </div>
            <div className="university-itemTag company">
                <LaptopOutlined className="university-tagIcon"/>
                <span className="university-tagText">Software Engineer</span>
            </div>
            <p className="university-description">
                Working as software engineer at Humax R&D Viet Nam. Responsibility for Application layer of Head Unit with C/C++
                and create automation test server. (ReactJs + Flask)
            </p>
        </div>
    )
}
