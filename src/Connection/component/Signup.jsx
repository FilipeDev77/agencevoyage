import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Pour la redirection
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate(); // Hook pour la navigation

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/signup', {
        username,
        password,
        address,
        phone,
        country,
      });

      // Si la requête réussit, rediriger vers la page de connexion
      setMessage(response.data?.message || 'Inscription réussie !');
      setTimeout(() => navigate('/signin'), 2000); // Redirection après 2 secondes
    } catch (error) {
      // Gérer les erreurs d'inscription
      setMessage(error.response?.data?.detail || 'Une erreur est survenue.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Inscription
        </h1>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nom d'utilisateur :
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Adresse :
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Téléphone :
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pays :
            </label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            S'inscrire
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-red-500">{message}</p>
        )}
        {/* Lien vers la page de connexion */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Déjà un compte ?{' '}
          <button
            onClick={() => navigate('/signin')}
            className="text-blue-500 hover:underline"
          >
            Connectez-vous ici
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
