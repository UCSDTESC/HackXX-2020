import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionHeader,
    SectionContent,
} from '../styles';

import {DarkBackground} from '../constants';
import {mediaBreakpointDown} from '../../breakpoints';

const AboutSection = styled(Page)`
    height: auto;
    padding-bottom: 10rem;
    background: ${DarkBackground.background};

    ${mediaBreakpointDown('lg', `
        padding-bottom: 2rem;
    `)}
`

const AboutHeader = styled(SectionHeader)`
    ${mediaBreakpointDown('sm', `
        margin-top: 2rem;
        text-align: center;
        width: 100%;
    `)}
`

const AboutContent = styled.div`
    padding-left: 0;
    margin-left: 0;
`

const Turtle = styled.img`
    display: none;
    ${mediaBreakpointDown('md', `
        display: block;
    `)}
`

class About extends Component {
    render() {
        return (
            <AboutSection id="about">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid">
                            <AboutHeader className="text-center">About HackXX</AboutHeader>                    
                            <div className="text-center">
                                <AboutContent>
                                    HackXX is UC San Diego’s annual women-centric, all inclusive hackathon that aims to foster greater gender equality in the engineering community. HackXX provides the tools, fellowship, and knowledge for hackers from all backgrounds to collaborate and pursue their technological ideas over the course of 24 hours.
                                </AboutContent>
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </AboutSection>
        )
    }
}

export default About;