import React from 'react';
import './Login.css'
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';

type SubmitData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const theme = useTheme();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleValueChange = ({ type, value }: { type: string; value: string }) => {
    switch (type) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  }

  const handleSubmit = (data: SubmitData) => {
    console.log(data);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: (theme) => theme.spacing(3),
            backgroundColor: (theme) => theme.palette.background.paper,
            borderRadius: (theme) => theme.shape.borderRadius,
            boxShadow: (theme) => theme.shadows[5],
            animation: 'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Sign In
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(ev) => handleValueChange({ type: 'email', value: ev.target.value})}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(ev) => handleValueChange({ type: 'password', value: ev.target.value})}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleSubmit({ email, password })}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;