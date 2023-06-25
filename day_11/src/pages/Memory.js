import React from 'react'
import ResultComponent from '../components/ResultComponent'

const Memory = () => {
  return (
    <div>
      <ResultComponent className={'BigScreen'} title={"Memory result"}  count={92} resultGrade={"Briliant"} resultMessage={"You scored higher than 92% in the Memory tests."} />
    </div>
  )
}

export default Memory
