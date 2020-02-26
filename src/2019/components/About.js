import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionHeader,
    SectionContent,
} from '../styles';

import {AboutConstants} from '../constants';
import {mediaBreakpointDown} from '../../breakpoints';

const AboutSection = styled(Page)`
    background: ${AboutConstants.gradient};
    height: auto;
    padding-top: 2rem;
`

const AboutHeader = styled(SectionHeader)`
    ${mediaBreakpointDown('sm', `
        margin-top: 2rem;
        text-align: center;
        width: 100%;
    `)}
`

const AboutContent = styled(SectionContent)`
    text-align: center;
`

const WhyHeader = styled(SectionHeader)`
    text-align: center;
    margin-top: 4rem;
`

const WhyDescription = styled.div`
    display: block;
    border-radius: 45px;
    padding: 1.5rem;
    z-index: 100;
    position: relative;

    ${mediaBreakpointDown('md', `
        text-align: center;
    `)}
`

const WhyImg = styled.img`
    height: 7rem;
    margin-top: 3rem;
`

const MiddleWhyImg = styled.img`
    height: 4rem;
    margin-top: 6rem;
`

class About extends Component {
    render() {
        return (
            <AboutSection id="about">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid">
                            <AboutHeader className="text-center">What is HackXX?</AboutHeader>     
                            <div className="row justify-content-center align-self-center">
                                <AboutContent>
                                    HackXX is UC San Diego’s annual women-centric, all inclusive hackathon that aims to foster greater gender equality in the engineering community. HackXX provides the tools, fellowship, and knowledge for hackers from all backgrounds to collaborate and pursue their technological ideas over the course of 24 hours.
                                </AboutContent>
                            </div>

                            <div className="row justify-content-center">
                                <WhyHeader>Why should I go to HackXX?</WhyHeader>
                            </div>
                            <div className="row justify-content-center">
                                <AboutContent>
                                    HackXX is for students of all races, gender, and sexuality.
                                </AboutContent>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-4 text-center">
                                    <WhyImg src="/cat-1.svg" />
                                    <WhyDescription>
                                        All majors are welcome to explore their ideas and passions! Dive into various fields of interest through our workshops and technical talks.
                                    </WhyDescription>
                                </div>
                                <div className="col-md-4 text-center">
                                    <MiddleWhyImg src="/cat-2.svg" />
                                    <WhyDescription>
                                        Form strong bonds by engaging with other women in tech and interacting with the engineering community.
                                    </WhyDescription>
                                </div>
                                <div className="col-md-4 text-center">
                                    <WhyImg src="/cat-3.svg" />
                                    <WhyDescription>
                                        New to hackathons? We have a supportive group of mentors who can walk you through it and provide you with resources!
                                    </WhyDescription>
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