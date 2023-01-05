import './index.css'

const FilterTabs = props => {
  const {activeTab, tagDetails, applyFilter} = props
  const {optionId, displayText} = tagDetails

  const onClickApplyFilter = () => {
    applyFilter(optionId)
  }

  const buttonStyles =
    displayText === activeTab ? 'active-tag-button' : 'tag-button'

  return (
    <li>
      <button
        type="button"
        className={buttonStyles}
        onClick={onClickApplyFilter}
      >
        {displayText}
      </button>
    </li>
  )
}

export default FilterTabs
