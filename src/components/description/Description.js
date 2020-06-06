import React from 'react'
import './description.css'
import { Divider } from 'antd'
import { Button } from 'antd'
import { Row, Col } from 'antd'

export default function Description() {
    return (
        <div className="description-container">
            <p className="description-descrip">Hello! I'm Trần Trung Nhật. I'm 24 years old boy with many passions and goals. <br />
            I am student at Ha Noi University of Science and Technology<br />
            I'm now a fullstack developer with more than 1 year of experience specializing in
            front-end development with ReactJs and back-end development with Python, Flask. Experienced with many stages of development cycle
            for dynamic web projects. Having much knowledges including MySQL, Python, Flask, Java Spring, HTML5, CSS, Javascript, ReactJs, C/C++, Docker, Nginx,...
            </p>
            <Divider />
            {/*<Row justify="center" className="description-buttons">*/}
            {/*    <Col className="description-col download" md={12} sm={24} xs={24} >*/}
            {/*        <Button className="description-button" href="https://www.google.com.vn/" target="_blank" >*/}
            {/*            DOWNLOAD CV*/}
            {/*        </Button>*/}
            {/*    </Col>*/}
            {/*    <Col className="description-col" md={12} sm={24} xs={24} >*/}
            {/*        <Button className="description-button" href="https://www.linkedin.com/in/tr%E1%BA%A7n-l%C3%A2m-21b57b1a2/" target="_blank">*/}
            {/*            CONTACT ME*/}
            {/*        </Button>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </div>
    )
}
