import axios from 'axios';
import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('test');

  const handleChange = (e) => {
    setName(e.target.value)
    
  };

  const submitHandle = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior


    try {
      const response = await axios.post('http://localhost:3000/form', name, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <label htmlFor="name">Name:</label>
        <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={name}
        required
      />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
