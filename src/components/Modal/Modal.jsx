// ModalComponent.jsx
import React from 'react';

const ModalComponent = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative w-full max-w-lg overflow-auto max-h-[80vh]">
        <button
          className="absolute top-2 right-2 text-black"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalComponent;
