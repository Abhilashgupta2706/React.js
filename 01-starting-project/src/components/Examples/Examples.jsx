import { useState } from 'react'
import TabButton from '../../components/TabButton/TabButton.jsx';
import Tabs from '../../components/Tabs/Tabs.jsx';
import { EXAMPLES } from '../../data.js';
import Section from '../Section/Section.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
        // console.log(selectedTopic)
    }

    var tapContent = <p>Please select a topic!!!!</p>;

    if (selectedTopic) {
        tapContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>;
    }

    return (
        <Section title='Example' id="examples">

            <Tabs
                // Added default value to it in Tabs component
                // ButtonsContainer="menu" //Custom components should be passed the identifier of that components. For example Section component's identifier is Section name of the default function
                buttons={
                    <>
                        {/* This approch is called children prop */}
                        {/* Both children & attribute props approch is good */}

                        {/* In case of arrow function, you can use the parenthasis as it will now not excecute on rendering */}
                        <TabButton isSelected={selectedTopic == 'components'} onClick={() => handleSelect('components')}> Components </TabButton>
                        <TabButton isSelected={selectedTopic == 'jsx'} onClick={() => handleSelect('jsx')}> JSX </TabButton>
                        <TabButton isSelected={selectedTopic == 'props'} onClick={() => handleSelect('props')}> Props </TabButton>
                        <TabButton isSelected={selectedTopic == 'state'} onClick={() => handleSelect('state')}> State </TabButton>
                    </>
                }>
                {tapContent}
            </Tabs>

            {/* WAY 1 */}
            {/* {!selectedTopic
                        ? <p>Please select a topic!!!!</p>
                        : (<div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>)
                    } */}

            {/* WAY 2 */}
            {/* {!selectedTopic ? <p>Please select a topic!!!!</p> : null}
                     {selectedTopic &&
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    } */}

            {/* WAY 3 */}
            {/* {!selectedTopic && <p>Please select a topic!!!!</p>}
                    {selectedTopic
                        ? <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                        : null} */}

            {/* WAY 4 : Used in function defined var*/}
            {/* Moved to Tabs.jsx */}

        </Section>
    );
}


