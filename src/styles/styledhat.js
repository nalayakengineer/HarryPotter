import styled from 'styled-components';
import { FlexColumn } from '../theme/defaultStyles';

const StyledHat = styled.div`
    .main{
        height: 95vh;
        ${FlexColumn}
        /* justify-content: space-evenly; */
        align-items: center;
        margin: auto 0%;
    }
    input{
        height: 300px;
        width: auto;
        margin: 20px;
    }
    h1{
        margin: 20px;
        color: #FFCB14;
        font-size: 150%;
    }
    p{
        margin: 10px;
    }
    .line {
        width: 150px;
        height: 0px;
        border: 1px solid #FFCB14;
        margin: 10px;
    }
`

export default StyledHat;