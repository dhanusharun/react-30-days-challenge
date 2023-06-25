import React from 'react'
import ResultComponent from '../components/ResultComponent'

const Reaction = () => {
  return (
    <div>
      <ResultComponent className={'BigScreen'} title={"Reaction result"}  count={80} resultGrade={"Great"} resultMessage={"You scored higher than 65% of the people who have taken these tests."} />
    </div>
  )
}

export default Reaction
