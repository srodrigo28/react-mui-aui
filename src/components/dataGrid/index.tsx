import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface IData{
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'First name',
    type: 'string',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'imageUrl',
    headerName: 'Image url',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width:  200,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows : IData[] = [
  { id: 1, name: 'PS5 Pro 1',   price: 4000, quantity: 14, imageUrl: "aaaa" },
  { id: 2, name: 'Lannister',   price: 5000, quantity: 31, imageUrl: "bbbb" },
  { id: 3, name: 'Lannister',   price: 4500, quantity: 31, imageUrl: "cccc" },
  { id: 4, name: 'Stark',       price: 3500, quantity: 11, imageUrl: "dddd" },
  { id: 5, name: 'Targaryen',   price: 1500, quantity: 50, imageUrl: "ffff" },
  { id: 6, name: 'Melisandre',  price: 9500, quantity: 70, imageUrl: "aaaa" },
  { id: 7, name: 'Clifford',    price: 8000, quantity: 44, imageUrl: "bbbb" },
  { id: 8, name: 'Frances',     price: 7000, quantity: 36, imageUrl: "cccc" },
  { id: 9, name: 'Roxie',       price: 7500, quantity: 65, imageUrl: "dddd" },
];

export default function DataGridemo() {
    console.log(rows)
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
