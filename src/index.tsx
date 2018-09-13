import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './css/index.css'
import './fonts'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(<App />, document.getElementById('root'))


registerServiceWorker()
