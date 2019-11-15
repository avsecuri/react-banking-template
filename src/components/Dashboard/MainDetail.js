import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './MainDetail.css'

export default class MainDetail extends Component {
    render() {
        return (
            <div className="main-detail">
                <Container>
                    <Row>
                        <Col className="border-right" xs={6}>
                            <div className="info">
                                <div>
                                    <img src="https://vi.gravatar.com/userimage/97964150/22280b6eb0a18b89e977da9d081aa226.png" alt="Avatar" />
                                </div>
                                <div>
                                    Xin chào quý khách
                                </div>
                                <div>
                                    Nguyễn Văn Vũ
                                </div>
                                <div>
                                    Lần đăng nhập gần đây lúc 15:20:59 ngày 13/11/2019
                                </div>
                            </div>
                        </Col>
                        <Col className="border-right" xs={3}>
                            <div className="balance">
                                số dư tài khoản
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className="shortlink">
                                shortlink
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
