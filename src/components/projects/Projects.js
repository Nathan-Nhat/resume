import React, {useState} from 'react'
import './projects.css'
import projects from '../../assets/projects.png'
import {Typography, Row, Col} from 'antd'
import web1 from '../../assets/web1.png'
import blog1 from '../../assets/blog1.png'
import {
    SearchOutlined
} from '@ant-design/icons';

export default function Projects() {
    const [src, setSrc] = useState("")

    return (
        <div className="projects-container">
            <div className="projects-title">
                <div className="projects-titleImage">
                    <img src={projects} alt="projects" className="projects-image"/>
                </div>
                <Typography.Text className="projects-titleText">PERSONAL PROJECTS</Typography.Text>
            </div>
            <Row justify="center" className="projects-row">
                <h2><a href={"https://maythucphamvietnhat.com"}>E-commerce website (https://maythucphamvietnhat.com)</a></h2>
                <Col className="projects-image-col" xs={24} sm={24} md={24}>
                    <div>
                        <img className="projects-image-all" src={web1} alt="web1"/>
                        <div className="projects-iconContainer">
                            <SearchOutlined onClick={() => setSrc(web1)} className="projects-iconSearch"/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row justify="center" className="projects-row">
                <h2><a href={"https://phimnhanh.plus"}>Movie Site (https://phimnhanh.plus)</a></h2>
                <Col className="projects-image-col" xs={24} sm={24} md={24}>
                    <div>
                        <img className="projects-image-all" src={blog1} alt="web1"/>
                        <div className="projects-iconContainer">
                            <SearchOutlined onClick={() => setSrc(blog1)} className="projects-iconSearch"/>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="projects-modal" style={{top: src === "" ? '-110vh' : '0'}}>
                <p className="projects-modalClose" onClick={() => setSrc("")}>+</p>
                <img src={src} alt="big" className="projects-modalImage"/>
            </div>
        </div>
    )
}
