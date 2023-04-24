// Write your code here

import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {eachApp} = this.props
    const {appName, imageUrl} = eachApp

    return (
      <li className="app-item">
        <img className="image" src={imageUrl} alt={appName} />
        <p className="name">{appName}</p>
      </li>
    )
  }
}
export default AppItem
