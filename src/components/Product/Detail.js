import React, { useEffect, useLayoutEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { max } from 'rxjs-compat/operator/max';
import { maxWidth } from '@material-ui/system';
import ButtonBase from '@material-ui/core/ButtonBase';
import logo from "../../yobo_logo.png"


function createData(product_name, timestamp, user_id, total_price, user_address, length, Did) {
  return { product_name, timestamp, user_id, total_price, user_address, length, Did };
}

const useStyles = makeStyles(theme => ({
  box: {
    width: 'maxWidth',

  },
  Groot: {
    flexGrow: 1,
    margin: 11,
    width: 500,


  },
  Gpaper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Detail(props) {
  const [open, setOpen] = React.useState(false);

  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const tmp = [];
  const classes = useStyles();


  const handleClickOpen = () => {
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
  };
  const handlemodify = () => {
    var params = new URLSearchParams();
    params.append('Did', props.data._id);
    params.append('invoice_company', document.getElementById('invoiceCompany').value);
    params.append('invoice_number', document.getElementById('invoiceNumber').value);
    params.append('transaction_status', document.getElementById('transaction_status').value);
    axios.post('http://localhost:8081/yobo/transaction/modifystatus'
      ,params)
      .then((Resopnse) => {
        if(Resopnse.data==1){
          document.setElementById('invoiceCompany').value=document.getElementById('invoiceCompany').value;
          document.setElementById('invoiceNumber').value=document.getElementById('invoiceNumber').value;
          document.setElementById('transaction_status').value=document.getElementById('transaction_status').value;
        }

      }).catch((ex)=>{
        console.log(ex);

      })
  };
  const invoiceCompany = () => {
    if (props.data.invoice_company == null) {
      return '배송회사';
    } else {
      return props.data.invoice_company;
    }
  }
  const invoiceNumber = () => {
    if (props.data.invoice_number == null) {
      return '운송장';
    } else {
      return props.data.invoice_number;
    }
  }
  const transaction_status = () => {
    if (props.data.transaction_status == null) {
      return '주문확인중';
    } else {
      return props.data.transaction_status;
    }
  }

  return (
    <div >
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        자세히
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.box} >
        <DialogTitle id="form-dialog-title">물품 정보</DialogTitle>
        
          <div className={classes.Groot} >
            <Paper className={classes.Gpaper}>
              <Grid container spacing={2}>
              <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={logo} />
            </ButtonBase>
          </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom>
                        {props.data.product_name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        수량:{props.data.product_qty}{props.data.product_unit}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs container direction="column" spacing={5} alignItems="flex-end">
                    <Grid item>
                      <Typography variant="subtitle1">가격:{props.data.product_price}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
       
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handlemodify} color="primary">
            수정
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}