import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
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
      <div className="signin">
        <h1 className="signin__header">sign in</h1>
        <form onSubmit={onSubmit} className="signup__form" autocomplete="off">
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
          {errors}
          <button className="button__signin">login</button>
          <div className="signup__link">
            <p className="description">don't have an account?</p>
            <Link className="link" href="/auth/signup">sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
