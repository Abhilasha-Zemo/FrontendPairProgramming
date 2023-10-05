import { Paper } from '@mui/material';
import './App.css'
import DataGrid from './components/organisms/DataGrid';
import { data } from './constants';

function App() {
  return (
    <>
      <Paper>
        <DataGrid data={data} />
      </Paper>
    </>
  );
}

export default App
