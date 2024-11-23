import React, { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ setIsOpen }) => {
  const modalRoot = document.getElementById("root-modal");

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg w-1/3"
      >
        <div className="border-b px-4 py-3 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Başlık</h2>
          <button className="text-gray-500 hover:text-gray-700 transition">
            ✕
          </button>
        </div>
        <div className="p-4">deneme</div>
        <div className="border-t px-4 py-3 flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition">
            Kapat
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Kaydet
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
