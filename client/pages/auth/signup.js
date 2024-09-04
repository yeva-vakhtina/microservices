import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password
    },
    onSuccess: () => Router.push('/')
  });

  const onSubmit = async event => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <div className="container">
      <div className="signup">
        <h1 className="signup__header">sign up</h1>
        <form onSubmit={onSubmit} className="signup__form" autocomplete="off">
            <input
              type="text" 
              placeholder="username"
            />
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email" 
              placeholder="email"
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <input 
              type="password"
              placeholder="confirm password">
            </input>
          {errors}
          <button className="button__signup">create account</button>
          <div className="signin__link">
            <p className="description">already have an account?</p>
            <Link className="link" href="/auth/signin">sign in</Link>
          </div>
        </form>
      </div>
    </div>

  );
};
