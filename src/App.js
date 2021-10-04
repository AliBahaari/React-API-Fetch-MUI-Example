import './App.css';
import axios from 'axios';
import { useState } from 'react';
import DataContainer from './components/DataContainer';
import { Alert, Typography, Container, LinearProgress, Button, Box } from '@mui/material';
import { Download } from '@mui/icons-material';
import Navbar from './components/Navbar';


function App() {

  const [data, setData] = useState([]);
  const [progressDisplay, setProgressDisplay] = useState(false);
  const [alertDisplay, setAlertDisplay] = useState([false, '']);

  const fetchData = () => {

    setProgressDisplay(true);

    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      
      if (res.status === 200) {
        setData(res.data);
        setProgressDisplay(false);
        setAlertDisplay([true, 'success']);
      } else {
        setAlertDisplay([true, 'error']);
      }

    });

  }

  return (
    <>

      <Navbar />

      <Container>

        <Box mt={6} mb={4} display="flex" flexDirection="column" alignItems="center" gap={3}>
          <Typography variant="h4" component="p">
            Fetch List of TODOs!
          </Typography>
        
          <Button variant="text" onClick={fetchData} size="medium" startIcon={<Download />}>Fetch Data</Button>
        </Box>

        <Box my={0}>
          {
            progressDisplay ? 
              <LinearProgress color="inherit" />
            :
              ''
          }
        </Box>        

        <Box mt={6}>
          {
            alertDisplay[0] === true ?
              <Alert severity={alertDisplay[1]} variant="outlined">
                Data fetched successfully!
              </Alert>
            :
              ''
          }
        </Box>

        {
          data.length > 0 ?
            <DataContainer data={data} />
          :
            <p className="noDataMessage">No Data Yet...</p>
        }

      </Container>
    </>
  );
}

export default App;
