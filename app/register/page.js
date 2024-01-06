'use client';
import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('Ryan');
  const [email, setEmail] = useState('ryan@gmail.com');
  const [password, setPassword] = useState('rrrrrr');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setLoading(true);
      console.table({ name, email, password });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <main>
      <div className='container'>
        <div
          className='row d-flex justify-content-center align-items-
center vh-100'
        >
          <div className='col-lg-5 bg-light p-5 shadow'>
            <h2 className='mb-4'>Register</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
