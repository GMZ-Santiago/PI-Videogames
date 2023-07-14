import React from 'react';
import styles from './paginado.module.css';

const Paginado = ({ gamesPerPage, allGames, currentPage, paginado }) => {
  const totalPages = Math.ceil(allGames / gamesPerPage);

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      const isActive = pageNumber === currentPage;

      return (
        <button
          key={pageNumber}
          className={isActive ? styles.active : ''}
          onClick={() => paginado(pageNumber)}
        >
          {pageNumber}
        </button>
      );
    });
  };

  return (
    <nav className={styles.nav}>
      <div>
        {renderPageNumbers()}
      </div>
    </nav>
  );
};

export default Paginado;
