import { Fragment } from 'react'
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';

function App() {


    return (
        // Use "Fragment" to wrap the child components to avoid unnecesary HTML elements in browser 
        // Also another way is to directly wrap inside "<> </>" without any name 
        <Fragment>
            <Header />
            <main>
                < CoreConcepts />
                < Examples />
            </main>
        </Fragment>
    );
}

export default App;