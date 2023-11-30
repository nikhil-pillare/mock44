

  import { Box, Button, Flex , FormControl, FormLabel, Input, Heading, FormLabelProps} from "@chakra-ui/react";
import { useState } from "react";
import { signup } from "../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
function SignUp() {
    const [email, setEmail]= useState("")
    const [image, setImage]= useState("")
    const [user, setuser]= useState("")
    const [password, setPassword]= useState("")
    const dispatch = useDispatch();
    const toast = useToast()
    const navigate = useNavigate()
    const data= useSelector(store=>store.authReducer)
     const handleSubmit=(event)=>{
        event.preventDefault()
        console.log({email, image, user, password})
        try {
            dispatch(signup({email, image, user, password}))
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
                colorScheme: 'green'
              })
              navigate('/signin')
        } catch (error) {
            toast({
                title: 'error',
                description: "invalid credentials",
                status: 'error',
                duration: 9000,
                isClosable: true,
                
              })
        }
       
          
     }
    return (
      <Box  width={"md"} margin={"auto"}>
        <FormControl>
        <Heading>Sign-Up</Heading>
        <FormLabel>Username</FormLabel>
         <Input id="email" placeholder='Username' value={user} onChange={(e)=>setuser(e.target.value)} />
         <FormLabel>image url</FormLabel>
         <Input id="image" placeholder='Profile Photo URL' value={image} onChange={(e)=>setImage(e.target.value)}/>
         <FormLabel>email</FormLabel>
         <Input id="emailval" placeholder='E-mail' type={"email"} value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <FormLabel>password</FormLabel>
         <Input id="password" placeholder='Password' type={"password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <Button onClick={handleSubmit} bg={"Highlight"} name="submit">Sign-up</Button>
        </FormControl>
      </Box>
    );
  }
  
  export default SignUp;