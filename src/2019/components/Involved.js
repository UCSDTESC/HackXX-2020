import React, {Component} from 'react';
import styled from 'styled-components';
import {mediaBreakpointDown} from '../../breakpoints'

import {
    Page,
    Container,
    //SeaweedContainer,
    //SeaweedStem,
    SectionContent,
    SectionHeader,
    //InlineMermaid,
    WhiteButton
} from '../styles';

import {
    InvolvedConstants
} from '../constants';

const InvolvedSection = styled(Page)`
    background: ${InvolvedConstants.gradient};
    height: auto;
`

class Involved extends Component {
    render() {
        return (
            <InvolvedSection id="involved">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent data-entrance="fade">      
                        <div className="container-fluid">
                            <SectionHeader className="text-center">How can I get involved?</SectionHeader>
                            {/* Register blurb and button */}
                            <div className="row mt-5 justify-content-center align-items-center">
                                If you're a student and you're interested in HackXX, go ahead and
                            </div>
                            <div className="row justify-content-center align-items-center">
                                <WhiteButton className="btn btn-outline-light" href="https://www.tesc.events/register/hackxx2020" target="_blank">register</WhiteButton>
                            </div>

                            {/* Help out section with three buttons */}
                            <div className="row justify-content-center mt-4">
                                If you think HackXX is a great initiative and would like to help out, you can be a
                            </div>
                            <div className="row justify-content-center align-items-start">
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="https://tesc.typeform.com/to/dM4HtK" target="_blank">volunteer</WhiteButton>
                                </div>
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="https://tesc.typeform.com/to/dM4HtK" target="_blank">mentor</WhiteButton>
                                </div>
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="mailto:sponsor@tesc.ucsd.edu" target="_blank">sponsor</WhiteButton>
                                </div>
                            </div>
                        </div>

                    </SectionContent>
                </Container>            
            </InvolvedSection>
        )
    }
}

export default Involved;