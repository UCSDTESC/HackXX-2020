import React, {Component} from 'react';
import styled from 'styled-components';
import {ReactComponent as Braces} from '../svg/women-centric.svg';

import {
    Page,
    Container,
    WhiteButton
} from '../styles';

import {mediaBreakpointDown} from '../../breakpoints';

const HeroSection = styled(Page)`
    background: url('/hero.svg'), linear-gradient(180deg, #224755 0%, #011321 100%);
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 120vh;
    width: 100%;

    ${mediaBreakpointDown('md', `
        background-position: bottom;
        background-size: contain;
    `)}
`;

const HeroImage = styled.img`
    width: 40%;
    margin-bottom: 1rem;

    ${mediaBreakpointDown('sm', `
        //margin-top: -9rem;
    `)}
`;

const HeroCopy = styled.div`
    font-size: 1.5rem;
    color: white;
`

const HeroBraces = styled(Braces)`
    width: 50%;
    display: block; 
    margin: 0 auto;
    margin-bottom: 1rem;
    fill: white;
`;

const HeroContent = styled.div`
    color: white;
    font-size: 1.2rem;
    text-align: center;
`

const CTA = styled(WhiteButton)`
    margin-top: 1rem;
    margin-bottom: 1rem;
    z-index: 10;

    &:hover {
        color: #071728 !important;
    }
`

const Button = styled.a`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`

class Hero extends Component {
    render() {
        return (
            <HeroSection className="align-items-center justify-content-center d-flex pt-5">
                <div className="align-items-center justify-content-center d-flex w-100" id="hero">
                    <div className="container-fluid align-items-center justify-content-center d-flex mt-5" style={{minHeight:'100%'}} >
                        <Container className="row w-100">
                            <div className="col-md-6 align-items-center d-flex justify-content-center flex-column">
                                <HeroImage src="/logo.svg" className="img-fluid" />
                                <HeroBraces />
                                <HeroCopy className="text-center">
                                    <HeroContent>May 2 - 3, 2020</HeroContent>
                                    <HeroContent>Price Center West Ballroom, UC San Diego</HeroContent>

                                    <Button href="https://www.tesc.events/register/hackxx2020" target="_blank" className="text-white">
                                        <CTA className="btn btn-outline-light" >
                                            Apply
                                        </CTA>                      
                                    </Button>
                                    <Button href="https://tesc.typeform.com/to/dM4HtK" target="_blank" className="text-white">
                                        <CTA className="btn btn-outline-light" >
                                            Volunteer
                                        </CTA>                      
                                    </Button>
                                    
                                </HeroCopy>
                            </div>

                            <div className="col-md-6 align-items-center d-flex justify-content-center flex-column">
                            </div>

                            <div class="clouds" />
                        </Container>
                    </div>
                </div>
            </HeroSection>
        )
    }
}

export default Hero;