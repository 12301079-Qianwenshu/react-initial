import "babel-polyfill"
import React from "react"
import { render } from "react-dom"

import "static/scss/iconfont/iconfont.scss"
import "static/scss/app.scss"


import Routes from './routes/index'

render(
    <Routes />,
    document.getElementById("root")
)
