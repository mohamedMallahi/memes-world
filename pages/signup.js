import Head from 'next/head';
import Link from 'next/link';

export default function SignUp() {
  return (
    <div className="signup">
      <h1>Create new Account</h1>
      <span>
        Already Registered? <Link href="signin">Sign in here</Link>.
      </span>
      <div className="signup-form">
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input type="text" id="Email" />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" />
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
}
