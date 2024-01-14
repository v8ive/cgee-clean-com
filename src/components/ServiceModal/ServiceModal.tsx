// ServiceModal.tsx
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material';

const ServiceModal = ({ open, onClose, service }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{service.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{service.fullDescription}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ServiceModal;