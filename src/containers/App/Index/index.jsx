/*
 * @Description: 
 * @Author: shuqianwen
 * @Date: 2019-09-06 18:20:31
 * @LastEditors: shuqianwen
 * @LastEditTime: 2019-12-04 14:26:28
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import style from './style.scss'

class Index extends Component {

    componentDidMount() {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    render() {
        return (
            <div className={style.index}>
               欢迎来到react-initial~
            </div>
        )
    }
}

export default Index