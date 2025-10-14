// import React, { useState, useEffect } from "react";
// import { Box, TextField, Typography, Button, Stack } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import Icon from "../components/layout/Icon";
// import { useDispatch, useSelector } from "react-redux";
// import { signupUser } from "../redux/actions";
// import type { AppDispatch, RootState } from "../redux/store";
// import { toast } from "react-toastify";

// const textInputStyle = {
//   "& input": {
//     fontFamily: "Montserrat",
//     fontWeight: 400,
//     fontSize: "14.22px",
//     lineHeight: "21.33px",
//     paddingLeft: "14.22px",
//   },
//   "& .MuiOutlinedInput-root": {
//     height: "44.44px",
//     borderRadius: "7.11px",
//   },
// };

// const labelStyle = {
//   fontFamily: "Montserrat",
//   fontWeight: 500,
//   fontSize: "12.44px",
//   marginBottom: "5.33px",
// };

// const Signup = () => {
//   const navigate = useNavigate();
//   const typedDispatch = useDispatch<AppDispatch>();

//   const { loading, error, user } = useSelector(
//     (state: RootState) => state.user
//   );

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const { name, email, password, confirmPassword } = formData;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     typedDispatch(
//       signupUser({
//         name,
//         email,
//         password,
//       })
//     );
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//     }
//     if (user) {
//       toast.success("Signup successful!");
//       navigate("/login");
//     }
//   }, [error, user, navigate]);

//   return (
//     <Box sx={{ pb: "20px" }}>
//       <Box
//         sx={{
//           width: "431.97px",
//           borderRadius: "14.22px",
//           boxShadow: "0 3.55px 17.77px rgba(0,0,0,0.1)",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           mt: "17.78px",
//           mx: "auto",
//           pb: "30px",
//         }}
//       >
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             width: "100%",
//           }}
//         >
//           <Box
//             sx={{
//               width: "374.26px",
//               height: "auto",
//               display: "flex",
//               flexDirection: "column",
//               gap: "24.89px",
//               pb: "14.22px",
//               mx: "auto",
//             }}
//           >
//             <Stack alignItems="center" sx={{ gap: "10.66px", pt: "21.33px" }}>
//               <Icon width={49.77} height={49.77} />
//               <Typography
//                 sx={{
//                   fontFamily: "Montserrat",
//                   fontWeight: 800,
//                   fontSize: "20px",
//                   textAlign: "center",
//                 }}
//               >
//                 Create Your Account
//               </Typography>
//               <Typography
//                 sx={{
//                   fontFamily: "Montserrat",
//                   fontWeight: 400,
//                   fontSize: "12.44px",
//                   color: "#555",
//                   textAlign: "center",
//                   lineHeight: "17.78px",
//                 }}
//               >
//                 Join us today and get started
//               </Typography>
//             </Stack>

//             <Stack spacing={2}>
//               <Box>
//                 <Typography sx={labelStyle}>Full Name</Typography>
//                 <TextField
//                   name="name"
//                   value={name}
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="John Doe"
//                   fullWidth
//                   sx={textInputStyle}
//                 />
//               </Box>

//               <Box>
//                 <Typography sx={labelStyle}>Email</Typography>
//                 <TextField
//                   name="email"
//                   value={email}
//                   onChange={handleChange}
//                   type="text"
//                   placeholder="john.doe@example.com"
//                   fullWidth
//                   sx={textInputStyle}
//                 />
//               </Box>

//               <Box>
//                 <Typography sx={labelStyle}>Password</Typography>
//                 <TextField
//                   name="password"
//                   value={password}
//                   onChange={handleChange}
//                   type="password"
//                   placeholder="Choose a strong password"
//                   fullWidth
//                   sx={textInputStyle}
//                 />
//                 <Typography
//                   sx={{
//                     fontFamily: "Montserrat",
//                     fontWeight: 400,
//                     fontSize: "10.66px",
//                     lineHeight: "14.22px",
//                     mt: "3.55px",
//                     color: "#555",
//                   }}
//                 >
//                   Password must be at least 8 characters long.
//                 </Typography>
//               </Box>

//               <Box>
//                 <Typography sx={labelStyle}>Confirm Password</Typography>
//                 <TextField
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={handleChange}
//                   type="password"
//                   placeholder="Re-enter your password"
//                   fullWidth
//                   sx={textInputStyle}
//                 />
//               </Box>
//             </Stack>

//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               disabled={loading}
//               sx={{
//                 height: "44.44px",
//                 borderRadius: "7.11px",
//                 fontFamily: "Montserrat",
//                 fontWeight: 500,
//                 fontSize: "14.22px",
//                 textTransform: "none",
//                 backgroundColor: loading ? "#b0b0b0" : "#1E5EFF",
//                 "&:hover": {
//                   backgroundColor: loading ? "#b0b0b0" : "#194ed8",
//                 },
//               }}
//             >
//               {loading ? "Signing Up..." : "Sign Up"}
//             </Button>

//             <Typography
//               sx={{
//                 fontFamily: "Montserrat",
//                 fontWeight: 400,
//                 fontSize: "14.22px",
//                 textAlign: "center",
//               }}
//             >
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 style={{
//                   fontFamily: "Montserrat",
//                   fontWeight: 500,
//                   fontSize: "12.44px",
//                   color: "#1E5EFF",
//                   textDecoration: "none",
//                 }}
//               >
//                 Log In
//               </Link>
//             </Typography>
//           </Box>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default Signup;






import React, { useState } from "react";
import { Box, TextField, Typography, Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../components/layout/Icon";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/actions";
import type { AppDispatch } from "../redux/store";
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

const Signup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { fullName, email, password, confirmPassword } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ 1. Empty field validations
    if (!fullName.trim()) {
      toast.error("Full Name is required");
      return;
    }
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!password.trim()) {
      toast.error("Password is required");
      return;
    }
    if (!confirmPassword.trim()) {
      toast.error("Confirm Password is required");
      return;
    }

    // ✅ 2. Password min length
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    // ✅ 3. Confirm password match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await dispatch(
        signupUser({
          name: fullName,
          email,
          password,
        })
      );
      toast.success("Signup successful!");
      navigate("/login");
    } catch (err: unknown) {
      toast.error(`Signup failed. Try again. ${err}`);
    } finally {
      setLoading(false);
    }
  };

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
              Create Your Account
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: "12.44px",
                color: "#555",
                textAlign: "center",
                lineHeight: "17.78px",
              }}
            >
              Join us today and get started
            </Typography>
          </Stack>

          <Stack spacing={2}>
            {/* Full Name */}
            <Box>
              <Typography sx={labelStyle}>Full Name</Typography>
              <TextField
                name="fullName"
                value={fullName}
                onChange={handleChange}
                placeholder="John Doe"
                fullWidth
                sx={textInputStyle}
              />
            </Box>

            {/* Email */}
            <Box>
              <Typography sx={labelStyle}>Email</Typography>
              <TextField
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="john.doe@example.com"
                fullWidth
                sx={textInputStyle}
              />
            </Box>

            {/* Password */}
            <Box>
              <Typography sx={labelStyle}>Password</Typography>
              <TextField
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Choose a strong password"
                fullWidth
                sx={textInputStyle}
              />
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: "10.66px",
                  lineHeight: "14.22px",
                  mt: "3.55px",
                  color: "#555",
                }}
              >
                Password must be at least 8 characters long.
              </Typography>
            </Box>

            {/* Confirm Password */}
            <Box>
              <Typography sx={labelStyle}>Confirm Password</Typography>
              <TextField
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                fullWidth
                sx={textInputStyle}
              />
            </Box>
          </Stack>

          {/* Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
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
            {loading ? "Creating account..." : "Sign Up"}
          </Button>

          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 400,
              fontSize: "14.22px",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "12.44px",
                color: "#1E5EFF",
                textDecoration: "none",
              }}
            >
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
