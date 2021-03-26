import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import  Typography  from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui//core/Button';
import Link from '@material-ui//core/Link';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import FormHelperText from '@material-ui/core/FormHelperText';


const useStyles = makeStyles((theme) => ({
  root:{
    height: '100vh'
  },

  image:{
    backgroundImage: 'url(/images/background3.jpg)',
    backgroundPosition: 'Center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: "center"
  },

  avatar:{
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1)
  },

  button:{
    marginTop: theme.spacing(1),

  },

  form: {
    margin: theme.spacing(2, 4)
  }
}));

function Copyright(){
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <a color="inserir" href="https://github.com/igormarcello">
        Igor Marcelo
      </a>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}

function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState();

 
  async function handleSignIn(){

    try{
      await authService.signIn('s.igormarcelo@gmail.com-', 'admin');
      //200
      navigate('/');
    } catch (error){
      console.log(error.response);
      navigate('/');
    }
    
  }

  return (
    <Grid container className={classes.root}>
       <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        md={7}
        className={classes.image}>
       <Typography style={{color: '#000', fontSize:35, lineHeight: '45px'}}>
        <strong>Simplicidade na maneira de conseguir um bico ou um serviço exclusivo!</strong>
       </Typography>
       <Typography variant="body2" style={{color: '#000', marginTop: 30, fontSize:15, lineHeight:'30px'}}>
        Compatilhe seu conhecimento com toda a nossa rede e contre o serviço que procura.
       </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}> 
            <LockOutlinedIcon/>
          </Avatar>
          <Typography variant='h5'>
            Acesso
          </Typography>
          <form className={classes.form}> 
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSignIn}>
              Entrar
            </Button>
            <Grid container>
              <Grid item>
                <Link>Esqueceu sua senha?</Link>
              </Grid>
              <Grid item>
                <Link>Não tem conta? Registre-se</Link>
              </Grid>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
    );
  }

  export default SignIn;
