import {Component, StrictMode} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello, Gocho!</h2>
}

// const Field = () => {
//     const holder = 'Enter here';
//     const styleedField = {
//         width: '300px',
//     };
//     return <input 
//             placeholder={holder} 
//             type="text" 
//             style={styleedField}/>
// }

function Btn() {
    const text = 'Log in';
    const logged = false; 

    return <button>{logged ? 'Enter' : text}</button>
}

class Field extends Component {
    render() {
        const holder = 'Enter here';
        const styleedField = {
            width: '300px',
        };

        return <input 
                placeholder={holder} 
                type="text" 
                style={styleedField}/>
    }
}

function App() {
  return (
    <div className="App">
        <StrictMode>
            <Header />
        </StrictMode>
        <Field/>
        <Btn/>
    </div>
  );
}

export {Header};
export default App;
