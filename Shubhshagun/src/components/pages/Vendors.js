import React from 'react';

import './vendor.css';

export default function Vendors() {
  return (
  <div>
    <h1 className='vendors_login'>Vendors</h1>
      <div class="container_vendor_login">
    <form action="#">

      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />

      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

      <label for="mobile">Mobile No.</label>
      <input type="number" id="mobile" name="Mobile_No." placeholder="Enter your Mobile number" />

      <label for="email">Email</label>
      <input type="email" id="email" name="E-mail" placeholder="Your Email address" />

      <label for="country">Country</label>
      <input type="text" id="lname" name="country" placeholder="India" />
      
      <label for="city">City</label>
      <input type="text" id="city" name="city" placeholder="Your City of Service" />

      <label for="service">Service</label>
      <input type="text" id="service" name="service" placeholder="Service you provide" />

      <label for="about">About</label>
      <textarea id="about" name="about" placeholder="About Your Company"></textarea>

      <input type="submit" value="Submit" />

    </form>
  </div>
  </div>
)}
