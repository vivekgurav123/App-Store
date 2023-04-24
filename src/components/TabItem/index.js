// Write your code here

import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {eachTab, tabSwitch} = this.props
    const {tabId, displayText} = eachTab
    const onTabSwitch = () => {
      tabSwitch(tabId)
    }
    return (
      <li className="tab-item" onClick={onTabSwitch}>
        <button type="button">{displayText}</button>
      </li>
    )
  }
}

export default TabItem
