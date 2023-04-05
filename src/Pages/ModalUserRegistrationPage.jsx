import React from 'react'
import ModalUserRegistration from '../components/ModalUserRegistration/ModalUserRegistration'

function ModalUserRegistrationPage() {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center' id="modalPageExample">
      <h3>This is only a test page, Modal Button should be added on the previous page</h3>
      <ModalUserRegistration/>
    </div>
  )
}

export default ModalUserRegistrationPage
