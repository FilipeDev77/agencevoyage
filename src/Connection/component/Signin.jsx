import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook pour la navigation

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      // En cas de succès, afficher le message et rediriger
      setMessage(response.data?.message || 'Connexion réussie !');
      setTimeout(() => navigate('/home'), 2000); // Redirection après 2 secondes
    } catch (error) {
      // Gérer les erreurs de connexion
      setMessage(error.response?.data?.detail || 'Une erreur est survenue.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Connexion
        </h1>
        <form onSubmit={handleSignin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom d'utilisateur :
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe :
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Connexion
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Signin;
