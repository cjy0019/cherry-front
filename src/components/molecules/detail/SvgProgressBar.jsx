import React from 'react';

const SvgProgressBar = ({ percentage, id }) => {
  return (
    <svg
      width='100%'
      height='6'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <linearGradient id={id}>
          <stop offset='0' stop-color='#E72847'>
            <animate
              dur='2s'
              attributeName='offset'
              fill='freeze'
              from='0'
              to={percentage}
            />
          </stop>
          <stop offset='0' stop-color='#292a31'>
            <animate
              dur='2s'
              attributeName='offset'
              fill='freeze'
              from='0'
              to={percentage}
            />
          </stop>
        </linearGradient>
      </defs>
      <rect
        id='Rectangle'
        x='0'
        y='0'
        width='100%'
        height='6'
        rx='3'
        fill={`url(#${id})`}
      />
    </svg>
  );
};

export default SvgProgressBar;
