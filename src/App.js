import './App.css';
import React, { useState } from 'react';
import CardView from './components/CardView'
import TableView from './components/TableView'
import { Switch, FormControlLabel } from '@material-ui/core';

const data = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
];

function App() {

  const [view, setView] = useState(false)

  const onChenageView = () => {
    setView(view ? false : true)
  }

  return (
    <div className='container'>
      <div className='taggelBut'>
        <FormControlLabel
          control={
            <Switch
              checked={view}
              name="checkedB"
              color="primary"
              onChange={onChenageView}
            />
          }
          label={!view ? 'Table view' : 'Card view'}
        />
      </div>

      {!view ? <TableView data={data} /> : <CardView data={data} />}

    </div>
  );
}

export default App;
