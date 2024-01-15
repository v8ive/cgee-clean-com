import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Menu,
    MenuItem,
    Avatar,
    Typography,
    useTheme,
    Container,
    Grow,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { AccountCircle, Image } from '@mui/icons-material';

const NavigationHeader = ({ isAuthenticated }) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [navMenuAnchorEl, setNavMenuAnchorEl] = useState(null);
    const [transparent, setTransparent] = useState(false);
    const open = Boolean(anchorEl);
    const navMenuOpen = Boolean(navMenuAnchorEl);
    const theme = useTheme();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavMenu = (event) => {
        setNavMenuAnchorEl(event.currentTarget);
    };

    const handleNavMenuClose = () => {
        setNavMenuAnchorEl(null);
    };

    const handleNavigate = (path) => {
        navigate(path);
        handleNavMenuClose();
    };

    // Transparent header when scrolling down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setTransparent(true);
            } else {
                setTransparent(false);
            }
        };

        // Listening to the scroll event
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const appBarStyle = {
        transition: '0.3s',
        backgroundColor: transparent ? (theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)') : 'initial',
        backdropFilter: transparent ? 'blur(10px)' : 'none',
    };

    return (
        <AppBar
            position="sticky"
            style={appBarStyle}
        >
            <Container>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Navigation Menu Icon */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="navigation menu"
                        onClick={handleNavMenu}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Navigation Menu */}
                    <Menu
                        id="nav-menu"
                        anchorEl={navMenuAnchorEl}
                        open={navMenuOpen}
                        onClose={handleNavMenuClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={() => handleNavigate('/')}>Home</MenuItem>
                        <MenuItem onClick={() => handleNavigate('/services')}>Services</MenuItem>
                        {/* Add other navigation menu items here */}
                    </Menu>

                    {/* Logo in the middle */}
                    <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1, textAlign: 'center' }}>
                        <img src={'/CGClean-Logo.png'} alt="Logo" style={{ maxHeight: '100px' }} />
                    </RouterLink>

                    {/* User avatar on the right */}
                    <IconButton
                        onClick={handleMenu}
                        color="inherit"
                        sx={{
                            '&:hover > .avatar-anim': {
                                transform: 'rotate(360deg)',
                                transition: 'transform 0.5s ease-in-out',
                            },
                        }}
                    >
                        {isAuthenticated ? <Avatar className='avatar-anim' alt="User Avatar" /* src={userImage} */ /> : <AccountCircle className='avatar-anim' />}
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        {isAuthenticated ? (
                            <>
                                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My Rewards</MenuItem>
                                <MenuItem onClick={handleClose}>Sign Out</MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={() => handleNavigate('/login')}>Sign In</MenuItem>
                                <MenuItem onClick={() => handleNavigate('/register')}>Register</MenuItem>
                            </>
                        )}
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavigationHeader;