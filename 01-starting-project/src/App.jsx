import imgUsed from '../src/assets/react-core-concepts.png';
import componentsImg from '../src/assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)]
    return (
        <header>
            <img src={imgUsed} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}

function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>

                    <ul>
                        <CoreConcept title="Components1" description='Something to describe' image={componentsImg} />
                        <CoreConcept title="Components2" description='Something to describe' image={componentsImg} />
                        <CoreConcept title="Components3" description='Something to describe' image={componentsImg} />
                        <CoreConcept title="Components4" description='Something to describe' image={componentsImg} />
                    </ul>

                </section>
            </main>
        </div>
    );
}

export default App;