import React, { useState } from "react";

const usePagination = (totalPages, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const getPages = () => {
    const pages = [];

    pages.push(1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    if (currentPage <= 3) {
      let j = 3;
      for (let i = 2; i <= Math.min(currentPage + j, totalPages - 1); i++) {
        if (j == 3) {
          j -= 1;
        } else if (j == 2) {
          j = 1;
        }
        pages.push(i);
      }
    } else {
      pages.push("...");
    }

    if (currentPage > 3 && currentPage < totalPages - 2) {
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return {
    currentPage,
    setCurrentPage,
    getPages,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1
  };
};

export default usePagination;
