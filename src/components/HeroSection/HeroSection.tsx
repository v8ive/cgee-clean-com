// HeroSection.tsx
import React from 'react';
import { Box, Button, Theme, Typography, useTheme } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useAppSelector } from '@/app/store';

const AnimatedBox = animated(Box);

export const HeroSection: React.FC = () => {
    const mode = useAppSelector((state) => state.user.mode);
    const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

    return (
        <AnimatedBox
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '25vh',
                bgcolor: (theme: Theme) => mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[200],
                backgroundSize: 'cover',
                color: mode === 'dark' ? '#fff' : '#000',
                borderRadius: 7,
                margin: 5,
            }}
            style={fade}
        >
            <Typography variant="h1" gutterBottom>
                CGee Clean
            </Typography>
            <Typography variant="h5" paragraph>
                Professional House Cleaning Services
            </Typography>
            <Button variant="contained" color="primary" size="large">
                Get a Free Quote
            </Button>
        </AnimatedBox>
    );
};