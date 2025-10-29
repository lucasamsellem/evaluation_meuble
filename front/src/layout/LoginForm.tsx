import { useState } from 'react';
import FormField from '../components/FormField';
import ActionButton from '../components/ActionButton';

// username : "admin"
// password : "jeuh345"

// TODO : RENVOYER UN JWT DES QUE JACCEDE A PAGE PROTEGEE

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: '',
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
        body: JSON.stringify({ username: credentials.username, password: credentials.password }),
      });

      if (!res.ok) {
        setError('Identifiants invalides');
        throw new Error(`Erreur HTTP : ${res.status}`);
      }

      window.location.replace('/');

      const authData = await res.json();
      localStorage.setItem('authData', JSON.stringify(authData));
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
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
        value={credentials.username}
        label='username'
        type='text'
        name='username'
        onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
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
