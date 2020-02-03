import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionHeader,
    SectionContent,
} from '../styles';

import {mediaBreakpointDown} from '../../breakpoints';

const AboutSection = styled(Page)`
    height: auto;
    padding-bottom: 10rem;
    background: black;

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
                            <AboutHeader>About HackXX</AboutHeader>
                            <div className="row my-4">
                                <div className="col-md-5">
                                    <AboutContent>
                                        HackXX is UC San Diego’s annual women-centric, all inclusive hackathon that aims to foster greater gender equality in the engineering community. HackXX provides the tools, fellowship, and knowledge for hackers from all backgrounds to collaborate and pursue their technological ideas over the course of 24 hours.
                                    </AboutContent>
                                </div>
                                <div className="col-md-6">
                                    <Turtle src="/sea-animals/turtle.svg" />
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </AboutSection>
        )
    }
}

export default About;