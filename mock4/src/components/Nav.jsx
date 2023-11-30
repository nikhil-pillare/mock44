
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Nav() {
    return (

        <Flex align="center" justify="space-around" width="100%" height="60px" bgGradient="linear(to-r, teal.300, blue.500)"  mb="40px" >

            <Link to="/" >SIGN-UP</Link>
            <Link to="/signin" >SIGN-IN</Link>
            <Link to="/forem">FOREM</Link>

        </Flex>

    );
}

export default Nav;