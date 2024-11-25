import {motion} from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Exams(){
    return (
        <Wrapper>
            <Box transition={{delay: 5}} animate={{borderRadius: "100px"}}>
                1
            </Box>
            <Box transition={{duration: 3}} animate={{borderRadius: "100px"}}>
                2
            </Box>
        </Wrapper>
    );
};

export default Exams;