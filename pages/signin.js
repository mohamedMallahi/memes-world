import Head from 'next/head';
import Link from 'next/link';
import { IonButton, IonContent } from '@ionic/react';

import { useAuth } from '../contexts/AuthContext';

export default function SignUp() {
  const { user, signin } = useAuth();

  return (
    <IonContent>
      <div className="signup">
        <h1>Sign In</h1>
        <span>
          Don't Have An Account? <Link href="signup">Sign up here</Link>.
        </span>
        <div className="signup-form">
          <IonButton color="primary" onClick={async (e) => await signin()}>
            Sign In
          </IonButton>
        </div>
        Forgot Password? <Link href="/">Change It</Link>.
      </div>
    </IonContent>
  );
}
