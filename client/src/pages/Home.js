import { Typography } from '@mui/material'
import Button from '@mui/material/button'
import { Container } from '@mui/system'

const Home = () => {

    // all the variables needed before the return
    const authToken = false
    
    const handleClick = () => {
        console.log('clicked')
    } 

    // after return, no logic, just the minimum, components
    return (
        <>
        {/* Background image */}
        <Container maxWidth='sm' sx={{ pt:5, pb: 5}}>
            <Typography variant='h1' sx={{ pt:5, pb:5 }}>Swipe Right®</Typography>
            <Button variant="contained" size="large" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}
            </Button>
        </Container>
        </>
    )
}

export default Home