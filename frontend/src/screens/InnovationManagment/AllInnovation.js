import React from 'react'
import InnovationHome from './InnovationHome'
import InnovationCard from './InnovationCard'
import About from '../InnovationManagment/about/About'
import InnovationInstructions from './InnovationInstructions'

const AllInnovation = () => {
  return (
    <div style={{backgroundColor:"#f0f5f5"}}>
        <InnovationHome />
        <InnovationCard />
        <About/>
    </div>
  )
}

export default AllInnovation