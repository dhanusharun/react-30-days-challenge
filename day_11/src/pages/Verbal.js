import React from 'react'
import ResultComponent from '../components/ResultComponent'

const Verbal = () => {
  return (
    <div>
      <ResultComponent className={'BigScreen'} title={"Verbal result"}  count={61} resultGrade={"Good"} resultMessage={"You scored higher than 61% in the Verbal tests."} />
    </div>
  )
}

export default Verbal
