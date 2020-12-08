import React from 'react'
import './description.css'
import {Divider} from 'antd'
import {Button} from 'antd'
import {Row, Col} from 'antd'

export default function Description() {
    return (
        <div className="description-container">
            <p className="description-descrip">Hello! I'm Trần Trung Nhật.
                I'm now a fullstack developer with more than 3 year of experience in web development. I have experiences
                with many stages of development cycle
                for dynamic web projects. Having much knowledges including MySQL, Python, Flask, Django,... (in
                back-end) HTML5, CSS, Javascript, ReactJs (in front-end) and some skills of Docker, Nginx, C/C++,..
            </p>
            <Divider/>
        </div>
    )
}
