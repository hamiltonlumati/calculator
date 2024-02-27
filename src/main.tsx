import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Screen from './layout/screen'

console.log(parseInt('2+2'));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Screen />
  </React.StrictMode>,
)
