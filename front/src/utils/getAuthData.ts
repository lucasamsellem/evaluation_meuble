type AuthData = { username: string; token: string };

const getAuthData = (): AuthData | undefined => {
  const raw = localStorage.getItem('authData');
  if (!raw) return undefined;

  try {
    const authData: AuthData = JSON.parse(raw);
    return authData;
  } catch (error) {
    console.error('Erreur lors de la lecture du authData :', error);
    return undefined;
  }
};

export default getAuthData;
