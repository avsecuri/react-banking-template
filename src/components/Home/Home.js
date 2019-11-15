import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
export default class Home extends Component {
    render() {
        document.title = 'Dong A';
        return (
            <div>
                <Helmet>
                  <title>Đăng nhập</title>
                </Helmet>
                <h1>Welcome to Dong A bank</h1>
                <a href="/dashboard">
                    <Button>Go to dashboard</Button>
                </a>
            </div>
        )
    }
}
