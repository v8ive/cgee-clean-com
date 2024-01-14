import React from 'react';
import TemplateTester from '@/components/TemplateTester/TemplateTester';
import { Typography, Stack, Container } from '@mui/material';
import Counter from '@/components/Counter/Counter';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import NavigationHeader from '@/components/NavigationHeader/NavigationHeader';

const Home = () => {
  const isAuthenticated = false;

  return (
    <>
      <NavigationHeader isAuthenticated={isAuthenticated} />
      <Container sx={{ py: 2, position: 'relative' }}>
        <Stack gap={1} my={2}>
          <Typography textAlign="center" variant="h2">
            CGee Clean
          </Typography>
          <Typography textAlign="center" variant="subtitle1">
            House Cleaning services you can trust
          </Typography>
        </Stack>
        <HeroSection />
        <TemplateTester />
        <Counter />
      </Container>
    </>

  );
};

export default Home;
