import React, { Component } from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet'
import './Dashboard.css'
import MainDetail from './MainDetail'

export default class Dashboard extends Component {
    render() {
        return (
          <div class="wrap">
            <Helmet>
              <title>Bảng điều khiển</title>
            </Helmet>
            <Header />
            <MainDetail />
            <div style={{
              background: '#fafafa',
              padding: '20px 0px'
            }}>
              <div className="container">
                <div style={{
                  border: '1px solid #eee',
                  borderRadius: '2px'
                }}>
                  <img src="/chart.png" alt="chart" style={{
                    width: '100%'
                  }} />
                </div>
              </div>
            </div>
          </div>
        )
    }
}
