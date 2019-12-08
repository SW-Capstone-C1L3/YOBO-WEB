import React,{useEffect,useLayoutEffect,useState} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import axios from 'axios';
import ComplexGrid from './ComplexGrid'




const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
const [rows, setrows] = useState([]);
  const [loading, setloading] = useState(false);

  const tmp=[]; 
  const classes = useStyles();
  

  if(loading!=true){
    axios.get('http://localhost:8081/yobo/transaction/getByCid', { 
    params:{ Cid:"5de0b8b42efe395a40b8ee71",
  pageNum:0}
    }).then( response => { 
      for(var i=0; i<response.data.length; i++) {
        tmp.push(response.data[i]);
      } 
      setrows(tmp);
      setloading(true);
  }).catch( response => { console.log(response) } );
}
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {rows.map(row => (
           
          <ComplexGrid data={row}></ComplexGrid>
            
          ))}
        </TableBody>
      </Table>
   
    </React.Fragment>
  );
  

}
