import React from 'react'
import {
    AndroidOutlined
} from '@ant-design/icons'
import './items.css'

export default function Mobile() {
    return (
        <div className="university-container">
            <div>
                <strong className="university-name">Fullstack Developer</strong> <span
                className="university-time">2019-now</span>
            </div>
            <div className="university-itemTag mobile">
                <AndroidOutlined className="university-tagIcon"/>
                <span className="university-tagText">Full-stack Engineer</span>
            </div>
            <p className="university-description">
                Working as full-stack engineer at CMC Global. Key member of Platform of Trust marketplace base on Shuup
                Platform (writen with Python/ Django)
            </p>
        </div>
    )
}
