import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';




initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState();

  const auth = getAuth();


  const googleProvider = new GoogleAuthProvider();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });

  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswprdChange = (e) => {
    setPassword(e.target.value);
  }
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      })
  }

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError('');
        console.log(user);

      })
  }


  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }
  // observe whether user auth state changed or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [])



  return {
    user,
    signInUsingGoogle,
    logOut,
    setUser,
    handleRegister,
    setError,
    error,
    login,
    handlePasswprdChange,
    handleEmailChange

  }
}

export default useFirebase;