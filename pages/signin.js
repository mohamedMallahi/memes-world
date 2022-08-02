import Head from 'next/head';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="signup">
      <h1>Sign In</h1>
      <span>
        Don't Have An Account? <Link href="signup">Sign up here</Link>.
      </span>
      <div className="signup-form">
        <div>
          <label htmlFor="Email">Email</label>
          <input type="text" id="Email" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" />
        </div>
        <button>Sign In</button>
      </div>
      Forgot Password? <Link href="/">Change It</Link>.
    </div>
  );
}
