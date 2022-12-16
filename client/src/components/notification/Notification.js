import { Alert } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { changeNotification } from "../../reducers/notificationReducer"

// const notification = useSelector(state => state.notification)

const Notification = () => {

    const dispatch = useDispatch()

    const notification = useSelector(state => state.notification)
    const severity = useSelector(state => state.severity)

    if (notification === '') {
        return null
    }

    return (
        <Alert
            onClose={() => { dispatch(changeNotification('')) }}
            severity={severity}
            sx={{ mt: 2 }}
        >
            {notification}
        </Alert>
    )
}

export default Notification