import { useState, Fragment } from 'react'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {

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
        // Use "Fragment" to wrap the child components to avoid unnecesary HTML elements in browser 
        // Also another way is to directly wrap inside "<> </>" without any name 
        <Fragment>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>

                    <ul>
                        {/* 2 ways of rendering */}
                        {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
                        <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} /> */}

                        {/* Dynamic rendering without repetition of code */}
                        {/* 'key' attribute is required so that react can identify the unique data after rendering */}
                        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
                    </ul>

                </section>

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
            </main>
        </Fragment>
    );
}

export default App;