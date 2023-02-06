import React from 'react';
import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 'adfhua',
            label: 'Can I use React on a project?',
            content: 'You can use react on any project you want',
        },
        {
            id: 'aognj',
            label: 'Can I use Javascript on a project?',
            content: 'You can use javascript on any project you want',
        },
        {
            id: 'kjeuf',
            label: 'Can I use CSS on a project?',
            content: 'You can use CSS on any project you want',
        },
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;
