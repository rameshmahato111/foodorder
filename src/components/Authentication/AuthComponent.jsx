import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';

const AuthComponent = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="w-full h-screen mx-auto bg-gradient-to-r from-[#580c1f] via-gray-500 to-pink-300 px-5 py-32">
      {showRegister ? (
        <RegisterComponent setShowRegister={setShowRegister} />
      ) : (
        <LoginComponent setShowRegister={setShowRegister} />
      )}
    </div>
  );
};

export default AuthComponent;
