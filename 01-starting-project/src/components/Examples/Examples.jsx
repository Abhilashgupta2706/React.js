import { useState } from 'react'
import TabButton from '../../components/TabButton/TabButton.jsx';
import { EXAMPLES } from '../../data.js';

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
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {/* This approch is called children prop */}
                {/* Both children & attribute props approch is good */}

                {/* In case of arrow function, you can use the parenthasis as it will now not excecute on rendering */}
                <TabButton isSelected={selectedTopic == 'components'} onSelect={() => handleSelect('components')}> Components </TabButton>
                <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => handleSelect('jsx')}> JSX </TabButton>
                <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect('props')}> Props </TabButton>
                <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect('state')}> State </TabButton>
            </menu>

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
            {tapContent}

        </section>
    );
}


