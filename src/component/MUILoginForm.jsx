import { useState, useContext } from "react";
import { useUserContext } from "../context/UserContext"
// Exercise 5.
import { Button, FormControl, FormLabel, FilledInput, Card } from "@mui/material";
// Exercise 5 end.

function LoginForm() {
  const [userEmail, setUserEmail] = useState("a@b.c");
  const [userPassword, setUserPassword] = useState("aaaaa");
  const [submitResult, setSubmitResult] = useState("");
  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail }); // context function
    }
  };

  {
    /* if the user is already logged in, show msg instead of form */
  }
  if (currentUser.email)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>{" "}
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );

  // Exercise 5.
    return (
    <Card className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>
            Email Address:
            </FormLabel>
            {/* Controlled form element needs both value and onChange.
          onChange handler uses event param e to access target value.
          Whenever user types, new value is stored in state. */}
            <FilledInput
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
        </FormControl>
        <FormControl>
          <FormLabel>
            Password:
          </FormLabel>
          <FilledInput
            type="password"
            value={userPassword}
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Button type="submit">Log In</Button>
          <p>{submitResult}</p>
        </FormControl>
      </form>
    </Card>
  );
  // Exercise 5 end.
}

export default LoginForm;
