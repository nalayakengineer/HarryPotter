import React, { Component } from 'react';
import styled from 'styled-components';
import Hat from './components/hat'

const StyledLayout = styled.div`
    & h1 {
        font-size: 350%
    }
`;

class App extends Component {
    render() {
        return (
            <StyledLayout>
                <Hat />
            </StyledLayout>
        );
    }
}

export default App;