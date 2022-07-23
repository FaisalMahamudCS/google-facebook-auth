import React from 'react';
import auth from  './firebase.init'
import { useSignInWithEmailAndPassword, useSignInWithGoogle,useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading, fError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    if (gUser) {
        navigate('/');
    }

    return (
        <div>
              <button onClick={() => SignInWithFacebook()}  className="btn btn-outline" >Continue with Google</button>
 
            <button onClick={() => signInWithGoogle()}  className="btn btn-outline" >Continue with Google</button>
 
        </div>
    );
};

export default Login;