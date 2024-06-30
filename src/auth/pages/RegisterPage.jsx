import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

export const RegisterPage = () => {

  const {displayName, email, password, onInputChange } = useForm({
    displayName: '',
    email: '',
    password: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <AuthLayout title={'Crear cuenta'}>
      <form onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>

            <TextField
              label="Contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant='contained' fullWidth>Crear cuenta</Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Ya tienes cuenta.</Typography>
            <Link component={RouterLink} color="inherit" to='/auth/login'>
              Ingresar.
            </Link>
          </Grid>


        </Grid>
      </form>
    </AuthLayout>



  )
}
