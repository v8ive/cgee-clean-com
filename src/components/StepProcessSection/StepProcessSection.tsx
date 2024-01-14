// StepProcessSection.tsx
import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Paper,
} from '@mui/material';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

const StepProcessSection = ({ services }) => {
    return (
        <Paper elevation={0} sx={{ p: 4 }}>
            {services.map((service, index) => (
                <Box key={index} mb={4}>
                    <Typography variant="h5" gutterBottom>{service.title}</Typography>
                    <Typography paragraph>{service.fullDescription}</Typography>
                    <List>
                        {/* You'd likely populate these steps from the service object */}
                        <ListItem>
                            <ListItemIcon>
                                <CleaningServicesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Step 1" secondary="Detailed dusting and vacuuming" />
                        </ListItem>
                        {/* Repeat ListItem for each step */}
                    </List>
                </Box>
            ))}
        </Paper>
    );
};

export default StepProcessSection;