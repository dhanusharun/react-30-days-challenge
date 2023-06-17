import React from "react";
import GridContainer from './GridContainer';

const MainContainer = () => {
    const totalCount = 32;
    const isPrime = num => num > 1 && Array.from({ length: Math.floor(Math.sqrt(num)) - 1 }, (_, i) => i + 2).every(divisor => num % divisor !== 0);

  const renderComponents = () => {
    const components = [];
    for (let i = 0; i < totalCount; i++) {
      var colorStyle = i % 2 === 0 ? '#21BE72' : '#FDDA3B';
      colorStyle = isPrime(i) ? '#FD5E53' : colorStyle;

      components.push(<GridContainer number={i} color={colorStyle} />);
    }
    return components;
  };

    return (
    <div className='main-wrapper'>
        <div className='header-data'>
        <h2>30 Days Of React</h2>
        <p>Number Generator</p>
        </div>
        <div className='grid-data'>
            {renderComponents()}
        </div>
    </div>

    );
}

export default MainContainer;