import React from 'react';
import { Container, Box, TextField, Button, Typography, Link, IconButton } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const RegisterPage = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: (theme) => theme.spacing(4),
            backgroundColor: (theme) => theme.palette.background.paper,
            borderRadius: (theme) => theme.shape.borderRadius,
            boxShadow: (theme) => theme.shadows[5],
            animation: 'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
            Create Account
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
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{ // <-- This is the important part
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
            />
            <TextField
              margin="normal"
              fullWidth
              name="referral-code"
              label="Referral Code (Optional)"
              type="text"
              id="referral-code"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              Register
            </Button>
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
              Already have an account?{' '}
              <Link href="/login" variant="body2">
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterPage;