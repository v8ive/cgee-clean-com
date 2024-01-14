// ServicesPage.tsx
import React, { useState } from 'react';
import { Box, Container, Fade, Grid, Typography, useTheme } from '@mui/material';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import ServiceModal from '@/components/ServiceModal/ServiceModal';
import NavigationHeader from '@/components/NavigationHeader/NavigationHeader';
import StepProcessSection from '@/components/StepProcessSection/StepProcessSection';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const services = [
    {
      title: 'Basic House Cleaning',
      description: 'A regular cleaning to keep your home sparkling.',
      price: '$150',
      extras: [{ text: '+$50 per extra room', tooltip: 'No windows, fridge, or oven included' }],
      fullDescription: 'Detailed info about Basic House Cleaning...',
    },
    {
      title: 'Deep House Cleaning',
      description: 'A regular cleaning to keep your home sparkling.',
      price: '$200',
      extras: [{ text: '+$50 per extra room', tooltip: 'Windows, fridge & oven cleaning included' }],
      fullDescription: 'Detailed info about Basic House Cleaning...',
    },
    {
      title: 'Move-Out House Cleaning',
      description: 'A regular cleaning to keep your home sparkling.',
      price: '$250',
      extras: [{ text: '+$50 per extra room', tooltip: 'No windows, fridge, or oven included' }],
      fullDescription: 'Detailed info about Basic House Cleaning...',
    },
    // ... other services
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleBookNow = (service) => {
    // The logic to handle the booking process
  };

  const theme = useTheme();
  const isAuthenticated = false; // Replace with your authentication logic

  return (
    <div>
      <NavigationHeader isAuthenticated={isAuthenticated} />
      <Fade in timeout={500}>
        <Container maxWidth="xl">
          <Box py={6} textAlign="center">
            <Typography variant="h3" gutterBottom>
              Our Cleaning Services
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Discover a fresh, clean home with our tailored services
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {services.map((service, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  extras={service.extras}
                  onLearnMore={() => handleLearnMore(service)}
                  onBookNow={() => handleBookNow(service)}
                />
              </Grid>
            ))}
          </Grid>

          <Box mt={8}>
            <StepProcessSection services={services} />
          </Box>
        </Container>
      </Fade>

      {selectedService && (
        <ServiceModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default ServicesPage;