// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstInput: '',
    secondInput: '',
    isSubmitted: false,
    isErrorFirstName: false,
    isErrorLastName: false,
  }

  validateFirstName = () => {
    const {firstInput} = this.state
    return firstInput !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({isErrorFirstName: !isValidFirstName})
  }

  validateSecondName = () => {
    const {secondInput} = this.state
    return secondInput !== ''
  }

  onBlurSecondName = () => {
    const isValidSecondName = this.validateSecondName()
    this.setState({isErrorLastName: !isValidSecondName})
  }

  onChangeFirstName = event => {
    this.setState({firstInput: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({secondInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidSecondName = this.validateSecondName()

    if (isValidFirstName && isValidSecondName) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        isErrorFirstName: !isValidFirstName,
        isErrorLastName: !isValidSecondName,
        isSubmitted: false,
      })
    }
  }

  onClickAnotherResponse = () => {
    this.setState(prevState => ({
      isSubmitted: !prevState.isSubmitted,
      firstInput: '',
      secondInput: '',
    }))
  }

  renderRegistrationForm = () => {
    const {
      isErrorFirstName,
      isErrorLastName,
      firstInput,
      secondInput,
    } = this.state
    const classFirstName = isErrorFirstName ? 'name-input-error' : 'name-input'
    const classLastName = isErrorLastName ? 'name-input-error' : 'name-input'

    return (
      <>
        <div className="bg-container">
          <h1 className="main-heading">Registration</h1>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label className="label-text" htmlFor="firstName">
              FIRST NAME
            </label>
            <br />
            <input
              id="firstName"
              type="text"
              onBlur={this.onBlurFirstName}
              onChange={this.onChangeFirstName}
              value={firstInput}
              className={classFirstName}
              placeholder="First Name"
            />
            {isErrorFirstName && <p>*Required</p>} <br />
            <label className="label-text" htmlFor="lastName">
              LAST NAME
            </label>{' '}
            <br />
            <input
              id="secondName"
              type="text"
              onBlur={this.onBlurSecondName}
              onChange={this.onChangeLastName}
              value={secondInput}
              className={classLastName}
              placeholder="Last Name"
            />
            <br />
            {isErrorLastName && <p>*Required</p>}
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </>
    )
  }

  renderSubmittedSuccessfully = () => (
    <div className="bg-container">
      <div className="submit-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p className="submitted">Submitted Successfully</p>
        <button
          className="button-submit"
          type="button"
          onClick={this.onClickAnotherResponse}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div>
        {isSubmitted
          ? this.renderSubmittedSuccessfully()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm
