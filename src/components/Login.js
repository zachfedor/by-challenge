import React from 'react';


const Login = ({ login }) => {
  let email, password;

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    login(email, password);
  };

  const changeEmail = (e) => { email = e.target.value };
  const changePassword = (e) => { password = e.target.value };

  return (
    <form
      className="Login"
      onSubmit={handleSubmit}
    >
      <label>
        Email
        <input
          type="email"
          onChange={changeEmail}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          onChange={changePassword}
        />
      </label>

      <button>Login</button>
    </form>
  );
};

export default Login;
