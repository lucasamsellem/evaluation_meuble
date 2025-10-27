import { useState } from 'react';
import LoginForm from '../layout/LoginForm';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError('');

    try {
      // Exemple d’appel API fictif
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email !== 'admin@example.com' || password !== '1234') {
        throw new Error('Identifiants incorrects');
      }

      alert('Connexion réussie !');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erreur inconnue');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} error={error} />
    </div>
  );
}
