// in app.js, we have the whole single page application with the routes to the different pages
// in each page, we defined the components
// each component is rendered with some data, which is requested via these services (functions), 
// services can also be used not only to get the data, but to transform it
// these functions request their data from API endpoint
// each endpoint is made to return "response.data" with a specific format

import axios from 'axios'
const baseUrl = '/api'

const createUser = signedUpUser => {
	const request = axios.post(`${baseUrl}/signup`, signedUpUser)
	return request.then(response => response.data)
}

const verifyUser = userToVerify => {
	const request = axios.post(`${baseUrl}/signup/verifyuser`, userToVerify)
	return request.then(response => response.data)
}

const logInUser = signedUpUser => {
	const request = axios.post(`${baseUrl}/login`, signedUpUser)
	return request.then(response => response.data)
}

