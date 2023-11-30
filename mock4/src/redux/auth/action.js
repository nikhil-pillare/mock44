import axios from 'axios'


export const signup=({email, password, user, image})=>(dispatch)=>{
         dispatch({type: "SIGNUPREQUEST"})
        axios.post('https://redux-server-mfe8.onrender.com/users', {email, password, user, image})
        .then((res)=>{
            dispatch({type: "SIGNUPSUCCESS"})
        }) 
        .catch((error)=>{
            dispatch({type: "SIGNUPFAILURE"})
        })
         
}

export const Signin=({email, password})=>(dispatch)=>{
    dispatch({type: "SIGNINREQUEST"})

    axios.get('https://redux-server-mfe8.onrender.com/users')
    .then((res) => {
        const user = res.data.find((user) => user.email === email && user.password === password);
       if (user) {
           dispatch({ type: "SIGNINSUCCESS", payload: true, });
        } else {
           dispatch({ type: "SIGNINFAILURE" });
        }
     })
     .catch(() => {
        dispatch({ type: "SIGNINFAILURE" });
     });
}