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

const FaqSection = styled(Page)`
    background: ${FaqConstants.gradient};
    height: auto;
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