import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Detail from "./Detail"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 11,

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
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

export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
        <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={'http://45.119.146.82:8081/yobo/product/getImage/?filePath='+props.data.product_image}/>
            </ButtonBase>
          </Grid> 
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.data.product_name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.data.product_qty}{props.data.product_unit}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {props.data.company_name}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs container direction="column" spacing={5} alignItems="flex-end">
              <Grid item>
                <Typography variant="subtitle1">{props.data.product_price}</Typography>
              </Grid>
              <Grid item alignItems="flex-end">
                <Detail data={props.data}></Detail>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}