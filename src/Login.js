import React from 'react';
import auth from  '../firebase.init'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    return (
        <div>
            <button onClick={() => signInWithGoogle()}  className="btn btn-outline" >Continue with Google</button>
 
        </div>
    );
};

export default Login;