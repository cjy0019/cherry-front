import React from 'react';

const RightHalfStar = ({ className, htmlFor }) => {
  return (
    <label htmlFor={htmlFor}>
      <svg
        className={className}
        width='12'
        height='24'
        viewBox='12 0 12 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_529_3936)'>
          <path
            strokeWidth='1.7'
            stroke='black'
            d='M5.41799 23.1643C4.83899 23.4613 4.18199 22.9408 4.29899 22.2763L5.54399 15.1813L0.259494 10.1473C-0.234006 9.67627 0.0224943 8.81527 0.683994 8.72227L8.03099 7.67827L11.307 1.18777C11.6025 0.602773 12.402 0.602773 12.6975 1.18777L15.9735 7.67827L23.3205 8.72227C23.982 8.81527 24.2385 9.67627 23.7435 10.1473L18.4605 15.1813L19.7055 22.2763C19.8225 22.9408 19.1655 23.4613 18.5865 23.1643L12 19.7803L5.41649 23.1643H5.41799Z'
          />
        </g>
        <defs>
          <clipPath id='clip0_529_3936'>
            <rect width='24' height='24' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </label>
  );
};

export default RightHalfStar;
