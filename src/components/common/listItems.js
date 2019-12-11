import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';


export const mainListItems = (
//     this.props.history.push(path);

  <div>
    <ListItem button onClick={()=>window.location.assign("/main/dashboard")} >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={()=>window.location.assign("/main/OrderBoard")} >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button  onClick={()=>window.location.assign("/main/ProductBoard")}>
      <ListItemIcon>
      <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="products" />
    </ListItem>
   
  </div>
);

export const secondaryListItems = (
  <div>
    
  </div>
);