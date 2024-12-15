import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar';

const Accountview = () => {
  const [userInfo, setUserInfo] = useState(null); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
    
      const token = localStorage.getItem('token');

      if (!token) {
       
        navigate('/signin');
        return;
      }

      try {
        // Récupérer les informations de l'utilisateur
        const userInfoResponse = await axios.get('http://localhost:8000/info_user', {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setUserInfo(userInfoResponse.data);

      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>

     
      <header className="bg-blue-500 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Page de Réservations</h1>
        </div>
      </header>

    
      <div className="flex items-center justify-center min-h-screen -mt-20">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
         
          {userInfo ? (
            <div className="mb-6">
              <h2 className="text-xl font-semibold">Informations de l'utilisateur</h2>
              <ul className="space-y-2 mt-4">
                {Object.keys(userInfo).map((key) => (
                  <li key={key} className="text-sm text-gray-700">
                    <strong>{key}:</strong> {userInfo[key]}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Aucune information utilisateur trouvée.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accountview;
