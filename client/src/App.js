import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// added apollo client import
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Biases from './pages/Biases';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

// here we make a new apollo client
const client = new ApolloClient({
    request: operation => {
        // grab token from local storage
        const token = localStorage.getItem('id_token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        });
    },
    uri: '/graphql'
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Explore />} />
                        <Route exact path='/biases' element={<Biases />} />
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/signup' element={<Signup />} />
                        <Route render={() => <h1 className='display-2'>Wrong Page</h1>} />
                    </Routes>
                </>
            </Router>
        </ApolloProvider>
    );
}

export default App;