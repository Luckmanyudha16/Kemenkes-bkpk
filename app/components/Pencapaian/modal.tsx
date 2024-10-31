// Modal.js
import React from 'react';
import styles from './modal.module.css'; // Tambahkan styling sesuai kebutuhan

const modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null; // Jangan tampilkan modal jika tidak terbuka

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose}>Tutup</button>
      </div>
    </div>
  );
};

export default modal;
