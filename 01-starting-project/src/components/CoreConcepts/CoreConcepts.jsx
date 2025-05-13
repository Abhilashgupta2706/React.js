import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from '../../components/CoreConcept/CoreConcept.jsx';

export default function CoreConcepts() {
    return (
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
    );
}


