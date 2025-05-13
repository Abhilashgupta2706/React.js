import { useState } from 'react'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { CORE_CONCEPTS } from './data.js';

function App() {

    const [selectedTopic, setSelectedTopic] = useState("Click a button!!!")

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
        // console.log(selectedTopic)
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>

                    <ul>
                        <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
                        <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
                        {/* Short and easy way */}
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>

                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {/* This approch is called children prop */}
                        {/* Both children & attribute props approch is good */}

                        {/* In case of arrow function, you can use the parenthasis as it will now not excecute on rendering */}
                        <TabButton onSelect={() => handleSelect('Components')}> Components </TabButton>
                        <TabButton onSelect={() => handleSelect('JSX')}> JSX </TabButton>
                        <TabButton onSelect={() => handleSelect('Props')}> Props </TabButton>
                        <TabButton onSelect={() => handleSelect('State')}> State </TabButton>
                    </menu>
                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;