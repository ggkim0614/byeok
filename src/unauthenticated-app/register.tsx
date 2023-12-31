import { FormEvent } from "react";
import { useAuth } from "../context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreen = () => {
  const { register, user } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    register({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="text" id="password" />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
