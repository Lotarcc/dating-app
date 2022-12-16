import { Button, Paper, TextField, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import Notification from "../components/notification/Notification"
import { changeNotification } from "../reducers/notificationReducer"
import { changeSeverity } from "../reducers/severityReducer"
import signUpService from '../services/signUpService'



const Signup = () => {

    // 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(state => state.user)

    useEffect( () => {
        if (user !== undefined && user !== '') {
            navigate('/profile')
        }
    }, [user, navigate])

    const submitUser = async (event) => {
        event.preventDefault()
    
        const signedUpUser = {
            username: event.target.username.value,
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirmPassword: event.target.confirm_password.value,
        }
        // console.log('user:', user,'empty space right before that?')
        // console.log(signedUpUser)

        signUpService.createUser(signedUpUser)
            .then(result => {
                
                if (result === true) {
                    dispatch(changeSeverity('success'))
                    dispatch(changeNotification('User created successfully (PENDING EMAIL CONFIRMATION SETUP'))
                    navigate('/login')
                } else {
                    dispatch(changeSeverity('error'))
                    dispatch(changeNotification(result))
                }
            })
    }

    return (
        <Container 
        sx={{ 
            pt:5, 
            pb: 5,
            backgroundImage: `url("https://assets.materialup.com/uploads/cd7deaa7-e263-4c1b-98c9-132d248fc0d4/preview.png")`,
            backgroundSize: 'cover',
            width: 'auto',
            height: 'auto',
            minHeight: '80vh',
        }}
        >
            <Paper elevation={10} sx={{ padding: 3, width:'50%', margin: 'auto'}} >
                <Typography> <h1>Signup</h1> </Typography>
                <form onSubmit={submitUser}>
                    <TextField fullWidth margin='normal' name='username' label='Username' placeholder="Username" autoComplete="nickname" required> </TextField>
                    <TextField sx={{ width: '49%', mr: '1%' }} margin='normal' name='firstname' label='First name' placeholder="First name" autoComplete="given-name" required> </TextField>
                    <TextField sx={{ width: '50%'}} margin='normal' name='lastname' label='Last name' placeholder="Last name" autoComplete="family-name" required> </TextField>
                    <TextField fullWidth margin='normal'  name='email' label='E-mail' placeholder="E-mail" autoComplete="email" required> </TextField>
                    <TextField sx={{ width: '49%', mr: '1%' }} margin='normal' type="password" name='password' label='Password' placeholder="Password" autoComplete="new-password" required> </TextField>
                    <TextField sx={{ width: '50%'}} margin='normal' type="password" name='confirm_password' label='Confirm Password' placeholder="Confirm Password" autoComplete="confirm-password" required> </TextField>
                    <Button type='submit' variant="contained" size="large" sx={{ mt: 2 }}> Submit </Button>
                    
                </form>
                <Notification />
            </Paper>
        </Container>
    )
}

export default Signup