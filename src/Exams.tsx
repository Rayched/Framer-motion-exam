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
    
    border-radius: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    margin: 0px 5px;
`;

function Exams(){
    return (
        <Wrapper>
            <Box 
                initial={{scale: 0.8}} 
                transition={{delay: 2, type: "spring"}} 
                animate={{scale: 1.2}}
            />
        </Wrapper>
    );
};

export default Exams;