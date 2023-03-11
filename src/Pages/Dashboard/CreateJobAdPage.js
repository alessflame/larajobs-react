import React from 'react'
import DashBoardLayout from '../../Layouts/DashBoard/DashBoardLayout'
import FormJobAd from '../../Components/FormJobAd/FormJobAd'

function CreateJobAdPage() {
  return (
    <>
    <DashBoardLayout children={<FormJobAd/>} />
    
    </>
  )
}

export default CreateJobAdPage