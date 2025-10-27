import { useState } from 'react';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  isLoading?: boolean;
  error?: string;
}

function LoginForm({ onSubmit, isLoading, error }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white mx-auto shadow-md rounded-2xl p-8 w-full max-w-sm space-y-6'
    >
      <h2 className='text-2xl font-semibold text-center'>Log in</h2>

      {error && <p className='text-red-600 text-sm text-center'>{error}</p>}

      <div>
        <label className='block text-sm font-medium mb-1' htmlFor='email'>
          Email
        </label>
        <input
          id='email'
          type='email'
          className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label className='block text-sm font-medium mb-1' htmlFor='password'>
          Mot de passe
        </label>
        <input
          id='password'
          type='password'
          className='w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type='submit'
        disabled={isLoading}
        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-60'
      >
        {isLoading ? 'Loading...' : 'Log in'}
      </button>
    </form>
  );
}

export default LoginForm;
