import { useState } from 'react';
import FormField from '../components/FormField';
import ActionButton from '../components/ActionButton';

// username : "admin"
// password : "0658480b2a13250839747060d9c90d4d72b6a8f7797b607f1bb6ff1f4fa2b34e"

function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: credentials.email, password: credentials.password }),
      });

      console.log(res);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white mx-auto shadow-md rounded-2xl p-8 w-full max-w-sm space-y-6'
    >
      <h2 className='text-2xl font-semibold text-center'>Authentification</h2>

      {error && <p className='text-red-600 text-sm text-center'>{error}</p>}

      <FormField
        value={credentials.email}
        label='email'
        type='email'
        name='email'
        onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))}
      />

      <FormField
        value={credentials.password}
        label='password'
        type='password'
        name='password'
        onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
      />

      <ActionButton type='submit' isLoading={isLoading} className='w-full'>
        Se connecter
      </ActionButton>
    </form>
  );
}

export default LoginForm;
