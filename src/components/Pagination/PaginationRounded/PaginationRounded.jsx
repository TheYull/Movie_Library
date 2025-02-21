import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import s from "./PaginationRounded.module.scss"

export default function PaginationRounded({ currentPage, totalPages, onPageChange }) {
  
  const handleChange = (_, value) => {
    onPageChange(value); 
  };
  
  return (
    <div className={s.pagination}>
      <Stack spacing={2} className={s.pagination}>
        <Pagination
          count={totalPages}
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}
