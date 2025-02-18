import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import s from "./PaginationRounded.module.scss"
export default function PaginationRounded() {
  return (
    <Stack spacing={2} className={s.pagination}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
