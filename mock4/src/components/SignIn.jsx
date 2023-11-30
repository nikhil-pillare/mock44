import { Box, Button, Flex , FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Signin } from "../redux/auth/action";
import { useState , } from "react";
import { useToast } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
function SignIn() {

    const [email, setEmail]= useState("")
    const toast = useToast()
    const [password, setPassword]= useState("")
     const dispatch = useDispatch();
     const data= useSelector(store=>store.auth.isAuth)
     console.log(data)
     const navigate = useNavigate()
     const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           
           await dispatch(Signin({ email, password }));
           if(data){
            toast({
                title: 'Login Successful',
                description: 'Welcome!',
                status: 'success',
                duration: 6000,
                isClosable: true,
             });
       
            setTimeout(()=>{
              navigate("/forem");
            },3000)
           }
          
           
        } catch (error) {
         
           toast({
              title: 'Login Failed',
              description: 'Please check your credentials and try again.',
              status: 'error',
              duration: 6000,
              isClosable: true,
           });
        }
     }
     
    return (
        <Box width={"md"} margin={"auto"}>
        <FormControl>
          <Heading>Sign-in</Heading>
         <FormLabel>E-mail</FormLabel>
         <Input id="loginemail" placeholder='E-mail' type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)} />
         <FormLabel>Password</FormLabel>
         <Input id="loginpassword" placeholder='Password' type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <Button type="submit" bg={"Highlight"} onClick={handleSubmit} name="submit">Sign-In</Button>
        </FormControl>
      </Box>
    );
  }
  
  export default SignIn;