/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography, FormControlLabel, Checkbox, IconButton, Link } from "@mui/material";
import { Google as GoogleIcon, Facebook as FacebookIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { setToken } from "@/lib/features/authSlice"; // Redux action to set token

const LoginModal: React.FC = ({ open, onClose }: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://code-commando.com/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(setToken(data.token)); // Store token in Redux
        onClose(); // Close the modal after login
      } else {
        alert("Invalid login credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="w-full max-w-md p-6 mx-auto mt-24 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <Typography variant="h6">Login</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
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
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />}
            label="Remember me"
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            className="mt-4"
            sx={{ backgroundColor: "#FF6A1A" }}
          >
            Login
          </Button>

          {/* Forgot Password and Social Media Login */}
          <div className="mt-4 flex justify-between items-center">
            <Link href="#" variant="body2" onClick={() => alert('Forgot Password clicked')}>
              Forgot Password
            </Link>
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

        {/* Register Link */}
        <div className="mt-4 text-center">
          <Typography variant="body2" color="textSecondary">
            Don't have an account?{" "}
            <Link href="#" onClick={() => { alert('Open Register Modal'); }}>
              Sign Up
            </Link>
          </Typography>
        </div>
      </Box>
    </Modal>
  );
};

export default LoginModal;