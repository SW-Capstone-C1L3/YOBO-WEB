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
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount,Did) {
  return { id, date, name, shipTo, paymentMethod, amount ,Did};
}



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
                     tmp.push(createData(1,response.data[i]["timestamp"], response.data[i]["user_id"], response.data[i]["total_price"], response.data[i]["user_address"], response.data[i]["products"].length,response.data[i]["_id"]));                   
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
            <TableCell>rrr</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="/main/OrderBoard">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
  

}
