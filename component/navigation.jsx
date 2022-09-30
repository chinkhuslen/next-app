import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from '@mui/material/Container';
import Link from "next/link";
import WhiteLogo from "../public/white.jsx";
const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: 'transparent' }} elevation={0}>
                <Container maxWidth="lg" >
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <WhiteLogo />
                        <Stack spacing={3} direction="row">
                            {
                                ['products', 'blog', 'contact', 'log-in'].map((el) => {
                                    return (
                                        <>
                                            <Link href={`/${el}`}>
                                                <Button variant="text" color="inherit">{el}</Button>
                                            </Link>
                                        </>
                                    )
                                })
                            }
                            <Link href='/plans'>
                                <Button variant="outlined" color="inherit" sx={{ p: '15px 10px' }}>Get Access</Button>
                            </Link>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
export default NavBar;