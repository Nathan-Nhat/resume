import React from 'react'
import {
    LaptopOutlined
} from '@ant-design/icons'
import './items.css'

export default function Frontend() {
    return (
        <div className="university-container">
            <div>
                <strong className="university-name">Company</strong> <span className="university-time">4/2019-6/2020</span>
            </div>
            <div className="university-itemTag company">
                <LaptopOutlined className="university-tagIcon" />
                <span className="university-tagText">Software Engineer</span>
            </div>
            <p className="university-description">
                Working at Humax R&D Viet Nam
            </p>
        </div>
    )
}
