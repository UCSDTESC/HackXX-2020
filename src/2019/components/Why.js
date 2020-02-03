import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionHeader,
    SectionContent,
} from '../styles';

import {mediaBreakpointDown} from '../../breakpoints';

const TracksSection = styled(Page)`
    height: auto;
    background: black;
`

const TracksHeader = styled(SectionHeader)`
    display: inline-block;
    text-align: center;
`

const TracksImg = styled.img`
    width: 8.5rem;
    margin-top: 3rem;

    ${mediaBreakpointDown('sm', `
        width: 40%;
    `)}
`

const ThirdTrackImg = styled.img`
    width: 19rem;

    ${mediaBreakpointDown('sm', `
        width: 80%;
    `)}
`

const TracksTitle = styled.div`
    font-size: 2rem;
    display: block;
    text-align: center;
`

const ThirdTracksTitle = styled.div`
    margin-top: -12rem;
    font-size: 2rem;
    display: block;
    text-align: center;
    
    ${mediaBreakpointDown('sm', `
        margin-top: -8rem;
    `)}
`

const TracksDescription = styled.div`
    display: block;
    text-align: left;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 45px;
    padding: 1.5rem;
    z-index: 100;
    position: relative;

    ${mediaBreakpointDown('md', `
        text-align: center;
    `)}
`

const Fish = styled.img`
    width: 80%
    margin-top: 1rem;
`

class Why extends Component {
    render() {
        return (
            <TracksSection id="tracks">
                <Container className="d-flex mx-auto h-100">
                    <SectionContent>
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <TracksHeader>Why should I go to HackXX?</TracksHeader>
                                HackXX is for students of all races, gender, and sexuality
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-4 text-center">
                                    <TracksImg src="/tracks/sustainability.svg" />
                                    {/*<TracksTitle>Sustainability</TracksTitle>*/}
                                    <TracksDescription>
                                        All majors are welcome to explore their ideas and passions! Dive into various fields of interest through our workshops and technical talks.
                                    </TracksDescription>
                                </div>
                                <div className="col-md-4 text-center">
                                    <TracksImg src="/tracks/wellbeing.svg" />
                                    {/*<TracksTitle>Health and Wellness</TracksTitle>*/}
                                    <TracksDescription>
                                        Form strong bonds by engaging with other women in tech and interacting with the engineering community.
                                    </TracksDescription>
                                </div>
                                <div className="col-md-4 text-center">
                                    <TracksImg src="/tracks/wellbeing.svg" />
                                    {/*<ThirdTracksTitle>Education</ThirdTracksTitle>*/}
                                    <TracksDescription>
                                        New to hackathons? We have a supportive group of mentors who can walk you through it and provide you with resources!
                                    </TracksDescription>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <Fish src="/sea-animals/fish.svg" />
                            </div>
                        </div>
                    </SectionContent>
                </Container>
            </TracksSection>
        )
    }
}

export default Why;