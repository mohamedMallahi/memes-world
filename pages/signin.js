import Head from 'next/head';
import Link from 'next/link';

import { useAuth } from '../contexts/AuthContext';

export default function SignUp() {
  const { user, signin } = useAuth();

  return (
    <div className="signup">
      <h1>Sign In</h1>
      <span>
        Don't Have An Account? <Link href="signup">Sign up here</Link>.
      </span>
      <div className="signup-form">
        {/* <div>
          <label htmlFor="Email">Email</label>
          <input type="text" id="Email" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" />
        </div> */}
        <button onClick={async (e) => await signin()}>Sign In</button>
      </div>
      Forgot Password? <Link href="/">Change It</Link>.
    </div>
  );
}
