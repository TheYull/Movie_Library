import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaginationRounded from "./PaginationRounded/PaginationRounded";

const PaginatedList = ({ endpoint, renderItem }) => {
  const [items, setItems] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Math.min(parseInt(searchParams.get("page")) || 1, 500); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${endpoint}&page=${currentPage}`);
        const data = await response.json();
        setItems(data.results || []);
        setTotalPages(Math.min(data.total_pages, 500));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, endpoint]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > 500) return;
    setSearchParams({ page: newPage });
  };

  return (
    <div className="container">
      <div className="subheader">
        {items.map(renderItem)}
      </div>
      <PaginationRounded
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginatedList;
