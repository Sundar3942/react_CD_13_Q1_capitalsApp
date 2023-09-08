import './index.css'
import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

const ReturnOption = props => {
  const {eachItem} = props
  const {capitalDisplayText, id} = eachItem

  return (
    <>
      <option id={id} value={id}>
        {capitalDisplayText}
      </option>
    </>
  )
}

class Capitals extends Component {
  state = {
    country: 'India',
    id: 'NEW_DELHI',
  }

  onChangingOption = event => {
    const eventValue = event.target.value
    const countryFinding = countryAndCapitalsList.find(
      each => each.id === eventValue,
    )
    this.setState({country: countryFinding.country, id: countryFinding.id})
  }

  render() {
    const capitalsList = countryAndCapitalsList
    const {country, id} = this.state
    return (
      <div className="page">
        <div className="card">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              value={id}
              className="select-tag"
              onChange={this.onChangingOption}
            >
              {capitalsList.map(each => (
                <ReturnOption eachItem={each} key={each.id} />
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
