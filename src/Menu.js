import React from 'react';

function Menu(props) {
  return (
    <ul>
      <li><a href="#" onClick={() => props.setActiveFormUrl("https://docs.google.com/forms/d/e/1FAIpQLScwYu_tTTPbYMGh0R9uxb0tbD3AUMDjeOW2hxJw6J4bIqQ_fw/viewform?embedded=true")}>Suvas Booking</a></li>
      <li><a href="#" onClick={() => props.setActiveFormUrl("https://docs.google.com/forms/d/e/1FAIpQLSePuZc-rosV6Jt5p7I35i2Pqm-jhhZrp31ADLBsrDYcgs0nNA/viewform?embedded=true")}>Slip Filling</a></li>
      
    </ul>
  );
}

export default Menu;
