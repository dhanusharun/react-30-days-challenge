import React from 'react'
import ResultComponent from '../components/ResultComponent'

const Visual = () => {
  return (
    <div>
      <ResultComponent className={'BigScreen'} title={"Visual result"}  count={70} resultGrade={"Good"} resultMessage={"You scored higher than 70% in the Visuals tests."} />
    </div>
  )
}

export default Visual
