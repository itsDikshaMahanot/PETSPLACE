import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "./firebase";

// function Reset() {
//     const [email, setEmail] = useState("");
//     const [user, loading, error] = useAuthState(auth);
//     const navigate = useNavigate();
//     useEffect(() => {
//         if (loading) return;
//         if (user) navigate("/dashboard");
//     }, [user, loading]);
//     return (
   
//   );
// }

export default Reset;