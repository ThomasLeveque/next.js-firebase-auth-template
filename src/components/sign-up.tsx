import React, { useState } from 'react';

import { signUpWithEmail } from '@libs/auth';

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUpWithEmail = async (): Promise<void> => {
    try {
      setLoading(true);
      await signUpWithEmail(email, password);
      // Do not setLoading(false) because Signup will unmount this component.
    } catch (err) {
      setLoading(true);
    }
  };

  return (
    <div className="flex items-center flex-col mb-8">
      <h2 className="text-3xl text-center mb-4">Sign up</h2>
      <input
        className="border-black border-2"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="border-black border-2"
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="bg-black text-white p-2" onClick={handleSignUpWithEmail}>
        {loading ? 'loading...' : 'Sign up with email'}
      </button>
    </div>
  );
};

export default SignUp;
