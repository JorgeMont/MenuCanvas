import React from 'react'
import ModalUserRegistration from '../components/ModalUserRegistration/ModalUserRegistration'

function ModalUserRegistrationPage() {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center' id="modalPageExample">
      <h3>This is only a test page, Modal should be deployed once we get the google authorization</h3>
      <ModalUserRegistration/>
    </div>
  )
}

export default ModalUserRegistrationPage
