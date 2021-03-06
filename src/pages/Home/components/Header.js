import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  img:{
    maxHeight: 55,
  },
  grow:{
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginRight: 10
  },
  bell: {
    marginRight: 10
  }

});

function Header(){
  const classes = useStyles();
  const navigate = useNavigate();

  return(
    <AppBar position="fixed" color='inherit'>
      <Toolbar>
        <img src="/images/logo-laranja.png" alt="logo" className={classes.img}/>
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button color="primary" variant='contained' className={classes.button} onClick={() => navigate('/sign-in')}>
          Novo Post
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Remy Sharp" src="" />
        </div>
        </Toolbar>
      </AppBar>
  )
}

export default Header;