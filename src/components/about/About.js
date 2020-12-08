import React from 'react'
import './about.css'
import {Typography} from 'antd'
import {
    GiftOutlined,
    MailOutlined,
    GithubOutlined,
    SkypeOutlined,
    PhoneOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import facebook from '../../assets/fbnewpng.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import avatar from '../../assets/avatar.jpeg'

export default function About() {
    return (
        <div className="about-container">
            <div className="about-shape1">
                <div className='about-intro'>
                    <img src={avatar} className="about-avatar" alt="avatar"/>
                    <div style={{marginLeft: '0.5rem', lineHeight: '40px'}}>
                        <Typography.Text className="about-introName">Trần Trung Nhật</Typography.Text>
                        <br/>
                        <span className="about-introDescript">Fullstack Developer</span>
                    </div>
                </div>
                <div className="about-tag">
                    <div className='about-introTag'>
                        <PhoneOutlined className="about-tagIcon"/>
                        <span className="about-tagText">(+84) 369401262</span>
                    </div>
                    <br/>
                    <div className='about-introTag'>
                        <MailOutlined className="about-tagIcon"/>
                        <span className="about-tagText">trantrungnhat6196@gmail.com</span>
                    </div>
                    <br/>
                    <div className='about-introTag'>
                        <GithubOutlined className="about-tagIcon"/>
                        <span className="about-tagText">https://github.com/Nathan-Nhat</span>
                    </div>
                    <br/>
                    <div className='about-introTag'>
                        <SkypeOutlined className="about-tagIcon"/>
                        <span className="about-tagText">trantrungnhat6196@live.com</span>
                    </div>
                    <br/>
                    <div className='about-introTag'>
                        <HomeOutlined className="about-tagIcon"/>
                        <span className="about-tagText">The Pride Tower, To Huu Street, La Khe Ward, Ha Dong District, Ha Noi</span>
                    </div>
                </div>
                {/*<div>*/}
                {/*    <a target="_blank" href="https://www.facebook.com/trantrung.nhat.56/" rel="noopener noreferrer" >*/}
                {/*        <img src={facebook} alt="facebook" className="about-fbicon" />*/}
                {/*    </a>*/}
                {/*    <a target="_blank" href="https://twitter.com/TrnLm29507341" rel="noopener noreferrer" >*/}
                {/*        <img src={twitter} alt="twitter" className="about-tticon" />*/}
                {/*    </a>*/}
                {/*    <a target="_blank" href="https://www.linkedin.com/in/tr%E1%BA%A7n-l%C3%A2m-21b57b1a2/" rel="noopener noreferrer" >*/}
                {/*        <img src={linkedin} alt="twitter" className="about-liicon" />*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

