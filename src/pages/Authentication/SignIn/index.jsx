// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Alert, Snackbar } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const theme = createTheme();

// const SignIn = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [open, setOpen] = useState(true);
//   const navigate = useNavigate();

//   const onClose = () => {
//     setOpen(false);
//   };
//   const changeEmail = (e) => {
//     console.log("Email", e.target.value);
//     // setEmail(e.target.value);
//   };
//   const changePassword = (e) => {
//     console.log("Password", e.target.value);
//     // setPasword(e.target.value);
//   };

//   const Login = () => {
//     console.log("log in");
//     if (email === "" || password === "") {
//       setOpen(true);
//     } else {
//       console.log(email, password);
//       localStorage.setItem("isLogget", true);
//       navigate("/");
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Box noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             onChange={changeEmail}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             onChange={changePassword}
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             <Login />
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//       <Copyright sx={{ mt: 8, mb: 4 }} />
//       <Button
//         open={true}
//         onClick={handleClick({
//           vertical: "top",
//           horizontal: "right",
//         })}
//       >
//         Open simple snackbar
//       </Button>
//       <Snackbar
//         open={open}
//         autoHideDuration={3000}
//         onClose={onClose}
//         message="Note archived"
//         action={action}
//         sx={{ fontSize: 20 }}
//       >
//         <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
//           Хэрэглэгчийн нэвтрэх эсвэл нууц үг хоосон байна!
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };