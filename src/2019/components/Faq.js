import React, {Component} from 'react';
import styled from 'styled-components';

import {
    Page,
    Container,
    SectionContent,
    SectionHeader
} from '../styles';

import {FaqConstants} from '../constants';

import Question from './Question';
import faqData from '../data/Faq';

const FaqQuestion = styled.h3`
    font-weight: bold;
    color: white;
    margin-bottom: 0.5rem;
`

const FaqAnswer = styled.p`
    color: white;
    margin-bottom: 0.1rem;
`

const FaqBox = styled.div`
    background: rgba(255, 255, 255, 0.2);
    border-radius: 45px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    vertical-align: middle;
`

const FaqLink = styled.a`
    color: white;
    text-decoration: underline;

    &:hover {
        color: #094E6E;
    }
`

const Stingray = styled.img`
    margin-top: 1rem;
    width: 90%;
`

const FaqSection = styled(Page)`
    background: ${FaqConstants.gradient};
    height: auto;
`

const FaqContactLink = styled.a`
    color: white !important;
`

class Faq extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FaqSection id="faq">
                <Container className="d-flex mx-auto">
                    <SectionContent data-entrance="fade">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <SectionHeader>
                                    Frequently Asked Questions
                                </SectionHeader>
                            </div>
                            <div className="row my-5">
                                <div className="col d-block px-0">
                                    <div className="content">
                                        {faqData.map((d, i) => <Question 
                                            {...d} 
                                            key={i} 
                                            idx={i}
                                            isLast={i === faqData.length - 1}
                                            isFirst = {i === 0}
                                        />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SectionContent>
                </Container>            
            </FaqSection>
        )
    }
}

export default Faq;