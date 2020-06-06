import React from 'react'
import {
    AndroidOutlined
} from '@ant-design/icons'
import './items.css'

export default function Mobile() {
    return (
        <div className="university-container">
            <div>
                <strong className="university-name">Fullstack Developer</strong> <span className="university-time">8/2019-now</span>
            </div>
            <div className="university-itemTag mobile">
                <AndroidOutlined className="university-tagIcon" />
                <span className="university-tagText">Python/Flask/Java/ReactJS</span>
            </div>
            <p className="university-description">
                Learning and working fullstack developer, focus on Python Back-end and ReactJs front-end
            </p>
        </div>
    )
}
