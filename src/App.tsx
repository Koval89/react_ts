import React from 'react';
import './App.css';
import Character from "./components/character/Character";


function App() {
    return (
        <div>
            <Character
                name={'Keara'}
                status={'Alive'}
                species={'Alien'}
                gender={'Female'}
                img={'https://rickandmortyapi.com/api/character/avatar/190.jpeg'}>

<p>loremIpsum 10 </p>
            </Character>

            <Character
                name={'Tree Person'}
                status={'Dead'}
                species={'Humanoid'}
                gender={'unknown'}
                img={'https://rickandmortyapi.com/api/character/avatar/364.jpeg'}/>
        </div>
    );
}

export default App;
