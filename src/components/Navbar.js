import { Typography, Toolbar, AppBar } from '@mui/material';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
                    API Fetch
                </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
