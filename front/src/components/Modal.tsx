import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg relative'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition'
        >
          X
        </button>

        {title && <h2 className='text-xl font-semibold mb-4'>{title}</h2>}

        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
