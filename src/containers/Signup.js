import { useState } from "react";

function Signup({ user, callback }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    // alert("****handleSubmit****");

    if (password === confirmpassword) {
      user.name = name;
      user.email = email;
      user.password = password;
      callback(user);
    } else {
      alert("Vos mots de pwd ne son p identiques !!");
    }
  };

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          placeholder="Confirme Password"
          type="password"
          name="password"
          value={confirmpassword}
          onChange={handleConfirmPasswordChange}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Signup;
