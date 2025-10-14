import React, { useState, useEffect } from "react";
import { Box, TextField, Typography, Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/layout/Icon";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions";
import type { AppDispatch, RootState } from "../redux/store";
import { toast } from "react-toastify";

const textInputStyle = {
  "& input": {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: "14.22px",
    lineHeight: "21.33px",
    paddingLeft: "14.22px",
  },
  "& .MuiOutlinedInput-root": {
    height: "44.44px",
    borderRadius: "7.11px",
  },
};

const labelStyle = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  fontSize: "12.44px",
  marginBottom: "5.33px",
};

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { loading, isAuthenticated, error } = useSelector(
    (state: RootState) => state.user // or state.auth based on your store
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Manual validation
    if (!email.trim() || !password.trim()) {
      if (!email.trim()) toast.error("Email is required");
      if (!password.trim()) toast.error("Password is required");
      return;
    }

    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // ✅ Redirect on successful login
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box sx={{ pb: "20px" }}>
      <Box
        sx={{
          width: "431.97px",
          borderRadius: "14.22px",
          boxShadow: "0 3.55px 17.77px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "17.78px",
          mx: "auto",
          pb: "30px",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "374.26px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "24.89px",
            pb: "14.22px",
          }}
        >
          <Stack alignItems="center" sx={{ gap: "10.66px", pt: "21.33px" }}>
            <Icon width={49.77} height={49.77} />
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 800,
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              Log In to Journey Booking Platform
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "12px",
                color: "#555",
                textAlign: "center",
                lineHeight: "17.78px",
                width: "70%",
              }}
            >
              Welcome back! Please enter your credentials to continue.
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Box>
              <Typography sx={labelStyle}>Email</Typography>
              <TextField
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                fullWidth
                sx={textInputStyle}
              />
            </Box>

            <Box>
              <Typography sx={labelStyle}>Password</Typography>
              <TextField
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter your password"
                fullWidth
                sx={textInputStyle}
              />
              <Box sx={{ textAlign: "right", mt: "5.33px" }}>
                <Link
                  to="/forgot-password"
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "12.44px",
                    textDecoration: "none",
                    color: "#1E5EFF",
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
            </Box>
          </Stack>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              height: "44.44px",
              borderRadius: "7.11px",
              fontFamily: "Montserrat",
              fontWeight: 500,
              fontSize: "14.22px",
              textTransform: "none",
              backgroundColor: "#1E5EFF",
              "&:hover": { backgroundColor: "#194ed8" },
            }}
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 400,
              fontSize: "14.22px",
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "12.44px",
                color: "#1E5EFF",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
