import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

interface IProdudo {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function DataGridDemo2() {
  let navigate = useNavigate();
  const [rows, setRows] = useState<IProdudo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Inicia o carregamento
        const response = await axios.get('http://localhost:8080/produtos'); // Substitua pelo seu endpoint
        setRows(response.data); // Armazena os dados retornados
        console.log(JSON.stringify(response.data));
      } catch (err) {
        setError('Erro ao carregar os dados');
        console.error(err);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };
    fetchData();
  }, []); // Executa apenas uma vez ao montar o componente

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Você tem certeza que deseja excluir este item?');
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8080/produtos/${id}`); // Endpoint para deletar
      
      return navigate("/");

    } catch (err) {
      console.error('Erro ao excluir o item:', err);
      setError('Erro ao excluir o item');
    }
  };

  const columns: GridColDef<IProdudo>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', type: 'string', width: 150 },
    { field: 'price', headerName: 'Price', type: 'number', width: 150 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 110 },
    { field: 'imageUrl', headerName: 'Image URL', sortable: false, width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 100,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params.row.id)}
          color="inherit"
        />
      ),
    },
  ];

  if (loading) return <p>Carregando dados...</p>;

  if (error) return <p>{error}</p>;

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
