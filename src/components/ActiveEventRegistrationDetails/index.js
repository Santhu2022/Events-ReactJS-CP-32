import './index.css'

const eventStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderInitialView = () => (
    <>
      <p className="initial-status-text">
        Click on an event, to view its registration details
      </p>
    </>
  )

  const renderYetToRegisterView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </>
  )

  const renderRegistrationsClosedView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-to-register-image"
      />
      <h1 className="registration-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-description">
        Stay tuned. We will reopen <br /> the registrations soon!
      </p>
    </>
  )

  const renderRegisteredView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="tick-image"
      />
      <h1 className="registration-closed-heading">
        You have already registered for the event
      </h1>
    </>
  )

  switch (registrationStatus) {
    case eventStatusConstants.yetToRegister:
      return renderYetToRegisterView()
    case eventStatusConstants.registered:
      return renderRegisteredView()
    case eventStatusConstants.registrationClosed:
      return renderRegistrationsClosedView()
    case eventStatusConstants.initial:
      return renderInitialView()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
