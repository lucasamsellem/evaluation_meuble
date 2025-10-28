import { useState } from 'react';
import FormField from '../components/FormField';
import ActionButton from '../components/ActionButton';

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
      <h2 className='text-2xl font-semibold text-center'>Authentification</h2>

      {error && <p className='text-red-600 text-sm text-center'>{error}</p>}

      <FormField
        value={email}
        label='email'
        type='email'
        name='email'
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormField
        value={password}
        label='password'
        type='password'
        name='password'
        onChange={(e) => setPassword(e.target.value)}
      />

      <ActionButton type='submit' isLoading={isLoading} className='w-full'>
        Se connecter
      </ActionButton>
    </form>
  );
}

export default LoginForm;
