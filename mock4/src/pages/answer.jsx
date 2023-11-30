import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Flex, VStack, Heading } from '@chakra-ui/react';

import { fetchAnswers, fetchQuestions } from '../redux/forem/action';
import {useNavigate} from 'react-router-dom'
  


function Answer() {
    const dispatch = useDispatch();
  const questions= useSelector((state) => state.forum.answer);
  const navigate = useNavigate()
 

  useEffect(() => {
    dispatch(fetchAnswers());
  }, [dispatch]);
    return (
<Box>
      <Button></Button>

      

      <VStack align="stretch" spacing={4}>
        {questions.map((question) => (
           <Box>
 <Flex key={question.id} borderWidth="1px" p={4} borderRadius="md" >
            <Flex dir='column' margin={"auto"}>
            <img src={question.userAvatar} alt="" />
            <h2>{question.username}</h2>
            </Flex>
            
            <h1>{question.answerText}</h1>
            
            
            
           
          </Flex>
          
         
           
           </Box> 
         
        ))}
      </VStack>

      
    </Box>
        
    );
}

export default Answer;