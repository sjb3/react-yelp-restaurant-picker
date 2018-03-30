import React from 'react';

export default (props) => {
  // console.log('RESTAURANT DETAILS');

  const { location, name } = props.restaurant;
  const { address1, address2, city } = location;
  return (
    <div>
      <span>Restaurant_Details:<br />
        {name}
      </span><br />
      {address1}<br />
      {address2}<br />
      {city}<br />
    </div>
  );
};

