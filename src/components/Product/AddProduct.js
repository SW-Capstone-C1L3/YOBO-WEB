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

export default function AddProduct(props) {
    const [open, setOpen] = useState(false);
    const [url,setUrl]=useState(null);
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const tmp = [];
    const classes = useStyles();
    const formData =new FormData();

    const handleChange=(e)=>{
        let reader =new FileReader();
        let file =e.target.files[0];
        reader.onloadend = () => {
            setUrl(file);
          }
          reader.readAsDataURL(file)
          formData.append('img',file);
        //    var productInfo = new Object();
        //      productInfo.product_name="치킨";
        //      productInfo.product_price=1500;
        //      productInfo.product_catsegory= "농산물";
        //      productInfo.product_qty=1;
        //      productInfo.product_unit="kg";
        //      productInfo.product_description="국내산 싱싱한 햇양파입니다";
        //      productInfo.provided_company_id="5de0b8b42efe395a40b8ee70";
        //      productInfo.company_name="OO축산";
        //      formData.append('product ',productInfo);
    }
    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const create = () => {
        formData.append('img ',url);
             var productInfo = new Object();
             formData.append('product_name',document.getElementById('product_name').value);
             formData.append('product_price',document.getElementById('product_price').value);
             formData.append('product_category',document.getElementById('product_category').value);
             formData.append('product_qty',document.getElementById('product_qty').value);
             formData.append('product_unit',document.getElementById('product_unit').value);
             formData.append('product_description',document.getElementById('product_description').value);
             formData.append('provided_company_id',"5de0b8b42efe395a40b8ee70");
             formData.append('company_name',document.getElementById('company_name').value);

        axios.post('http://45.119.146.82:8081/yobo/product/createProduct', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((response) => {
          })
          .catch((error) => {
          })
      
    };

    return (
        <div>
            <Button variant="outlined" color="primary" size="lg" block onClick={handleClickOpen}>
                물품 등록
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.box} >
                <DialogTitle id="form-dialog-title">물품 등록</DialogTitle>

                <div className={classes.Groot} >
                    <Paper className={classes.Gpaper}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <div>
                                        <form>
                                            <input type="file" onChange={handleChange} />
                                            <button type="submit">Upload Image</button>
                                        </form>                             
                                           </div>

                                    <Grid item xs>
                                        <TextField
                                            id="company_name"
                                            label="company_name"
                                            defaultValue="null"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <TextField
                                            id="product_category"
                                            label="product_category"
                                            defaultValue="null"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <TextField
                                            id="product_description"
                                            label="product_description"
                                            defaultValue="null"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <TextField
                                            id="product_name"
                                            label="product_name"
                                            defaultValue="null"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <TextField
                                            id="product_price"
                                            label="product_price"
                                            defaultValue="null"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <TextField
                                            id="product_qty"
                                            label="product_qty"
                                            defaultValue="null"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs>
                                        <TextField
                                            id="product_unit"
                                            label="product_unit"
                                            defaultValue="null"
                                            variant="outlined"
                                        />
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
                    <Button onClick={create} color="primary">
                        수정
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}