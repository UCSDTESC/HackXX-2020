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

{/*import {
    Involved as InvolvedConstants
} from '../constants';*/}

const InvolvedSection = styled(Page)`
    background: black;
    height: auto;
`

class Involved extends Component {
    render() {
        return (
            <InvolvedSection id="involved">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent data-entrance="fade">      
                        <div className="container-fluid">
                            {/* Get Involved title and mermaid */}
                            <div className="row">
                                <div className="col-md-8">
                                    <SectionHeader>Get Involved</SectionHeader>
                                </div>
                            </div>

                            {/* Register blurb and button */}
                            <div className="row mt-5 align-items-center">
                                <div className="col-md-6">
                                    If you're a student and you're interested in HackXX, go ahead and
                                </div>
                                <div className="col-md-6">
                                    <WhiteButton className="btn btn-outline-light" href="https://www.tesc.events/register/hackxx" target="_blank">register</WhiteButton>
                                </div>
                            </div>

                            {/* Help out section with three buttons */}
                            <div className="row justify-content-between mt-2">
                                <div className="col-md-6 align-self-end">
                                    If you think HackXX is a great initiative and would like to help out, you can be a
                                </div>
                            </div>
                            <div className="row align-items-start mb-5 mt-3">
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="https://tesc.typeform.com/to/wnhOgj" target="_blank">volunteer</WhiteButton>
                                </div>
                                <div className="col-md-auto">
                                    <WhiteButton className="btn btn-outline-light" href="https://tesc.typeform.com/to/wnhOgj" target="_blank">mentor</WhiteButton>
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