import React from 'react';

const faq = [
    {
        question: `What is a Hackathon?`,
        answer: "A hackathon is a technological marathon where a large number of people meet to collaboratively build out their ideas using technology."
    },
    {
        question: `Who can attend HackXX?`,
        answer: `HackXX is an all-inclusive hackathon that is open to all majors and genders. Any college or high school students that is over 18 years of age are eligible to apply. If you are enrolled at a UC campus but not yet 18, you are also eligible to participate.`
    },
    {
        question: `How do I get there?`,
        answer: (
            <div>
                HackXX will take place in <a href="https://goo.gl/maps/orDRHLUZcPjMoW6HA" target="_blank">Price Center Ballroom West</a>. You can apply for <a href="https://tesc.typeform.com/to/PDCo4K" target="_blank">travel reimbursement</a>, which will be distributed on a case-by-case basis.
            </div>
            )
    },
    {
        question: `Do I have to pay?`,
        answer: 'No!'
    },  
    {
        question: `What if I don't have a team?`,
        answer: 'We will host team formation events prior to the event and at the beginning of hackathon so that no one has to hack alone. We allow teams up to four hackers.'
    }, 
    {
        question: 'What should I bring?',
        answer: 'Bring your student ID or government issued ID, computer, any external peripherals you may need, any hardware you plan on using, and an open mind. Also bring a change of clothes and toiletries you may need. You may also bring a sleeping bag if you plan to sleep.'
    },
    {
        question: 'What do volunteers and mentors do?',
        answer: (
            <div>
                <p>
                    General volunteers help out with logistics during the event such as check in, clean up, food distribution, and other tasks that make HackXX possible!
                </p>
                <p>
                    Mentors assist hackers with their projects when stuck. They’ll be floating around the hacking space helping participants with any questions they might have, especially technical questions in a domain the mentor is familiar with.
                </p>
            </div>
        )
    },
    {
        question: `Are there any rules?`,
        answer: (
            <div>
                We are adopting <a target="_blank" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Major League Hacking’s Code of Conduct</a>, which requires you to respect others and help us keep HackXX a safe space for everyone. If you want your project to be considered for an award, you may only submit work that your team wrote during the hackathon.
            </div>
        )
    }
]

export default faq;
