/* eslint-disable no-unused-vars */
import './index.css'

const BrowserHistory = props => {
  const {historyList, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="list-container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image" />
        <p className="title">{title}</p>
        <p className="span">{domainUrl}</p>
      </div>
      <div>
        <button
          onClick={onDelete}
          type="button"
          className="button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
