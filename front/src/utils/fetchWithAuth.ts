type FetchOptions = Omit<RequestInit, 'headers'> & {
  headers?: Record<string, string>;
};

// Helper pour ajouter automatiquement le token
const fetchWithAuth = async (endpoint: string, options: FetchOptions = {}) => {
  const token = localStorage.getItem('token');

  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  const response = await fetch(`http://localhost:8000/${endpoint}`, config);

  // Si 401/403, le token est invalide -> déconnexion
  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem('token');
    window.location.href = '/login';
    throw new Error('Session expirée');
  }

  return response;
};

export default fetchWithAuth;
