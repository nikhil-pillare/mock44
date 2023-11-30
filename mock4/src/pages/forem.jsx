import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Flex, VStack, Heading } from '@chakra-ui/react';

import { fetchQuestions } from '../redux/forem/action';
import {useNavigate} from 'react-router-dom'
  


function Forem() {
    const dispatch = useDispatch();
  const questions= useSelector((state) => state.forum.question);
  const navigate = useNavigate()
  const handleRoute=()=>{
navigate('/answer')
  }

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
    return (
<Box>
      <Button></Button>

      

      <VStack align="stretch" spacing={4}>
        {questions.map((question) => (
           <Box>
 <Flex key={question.id} borderWidth="1px" p={4} borderRadius="md" onClick={handleRoute}>
            <Flex dir='column' margin={"auto"}>
            <img src={question.userAvatar} alt="" />
            <h2>{question.username}</h2>
            </Flex>
            
            <Heading>{question.questionTitle}</Heading>
            <Flex margin={"auto"} alignItems={"center"} justifyContent={"space-around"} width={"50%"} >
            <Button margin={"10px"} bg={'GrayText'}>{question.language}</Button>
            <Button bg={'GrayText'}>{question.answers} ANSWERS</Button>
            <Button bg={'GrayText'}>{question.postedDate}</Button>
            
            


            
            </Flex>
            
            <Heading >{question.upvotes} Upvotes</Heading>
           
          </Flex>
          
          <Flex margin={"left"} alignItems={"center"} justifyContent={"space-around"} width={"25%"} >
          <Button size={"lg"} width={'40%'} bg={"yellow.600"}>edit</Button>
           <Button size={"lg"} width={"40%"} bg={"red.500"}>delete</Button>
          </Flex>
           
           </Box> 
         
        ))}
      </VStack>

      
    </Box>
        
    );
}

export default Forem;



