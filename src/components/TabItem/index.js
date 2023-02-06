// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabItem, getTabId, isActive} = props
  const {displayText, tabId} = eachTabItem
  console.log(displayText)
  const ChangeTabId = () => {
    getTabId(tabId)
  }
  const getActiveStatus = isActive ? 'change-color' : ''
  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={`tab-item-heading ${getActiveStatus}`}
        onClick={ChangeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
