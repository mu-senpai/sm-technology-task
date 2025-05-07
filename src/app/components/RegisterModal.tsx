/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography, IconButton } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { setToken } from "@/lib/features/authSlice";

const RegisterModal: React.FC = ({ open, onClose }: any) => {
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      // Simulate API call for register
      const response = await fetch('https://code-commando.com/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setToken(data.token)); // store the token in Redux
        onClose(); // Close the modal after registration
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="w-full max-w-md p-6 mx-auto mt-24 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between">
          <Typography variant="h6">Register</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="contained" fullWidth type="submit" className="mt-4" sx={{ backgroundColor: '#FF6A1A' }}>
            Register
          </Button>

          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-4">
              <IconButton>
                <GoogleIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default RegisterModal;