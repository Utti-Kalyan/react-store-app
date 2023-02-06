// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {appName, imageUrl} = appItem
  return (
    <li className="App-list-item">
      <img src={imageUrl} alt={appName} className="App-item-image" />
      <p className="App-name-heading">{appName}</p>
    </li>
  )
}

export default AppItem
