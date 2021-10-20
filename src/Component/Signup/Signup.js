import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';

const Signup = () => {

  const { signInUsingGoogle, handleRegister, handlePasswprdChange,
    handleEmailChange, error
  } = useAuth();
  return (
    <div>

      <div className="form-container mx-auto mt-5 w-25" >
        <h1 className="mb-5">Sign Up to <span className="span">Healthcare</span></h1>
        <div className="row my-4">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onChange={handlePasswprdChange} type="password" className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <span className="text-danger">{error}</span>  <br />
        <button onClick={handleRegister} type="submit" className=" my-3 btn-regular">Signup</button> <br />

      </div>


      <Button onClick={signInUsingGoogle} className="my-3">Google Sign in</Button>

    </div>
  );
};

export default Signup;