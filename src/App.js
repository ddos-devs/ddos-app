import React from 'react';
import logo from './logo.png';
import ListItem from "./listItem.png";
import config from './config'
import './App.css';
import SvgIcon from "@material-ui/core/SvgIcon";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>
                    קהילת המפתחים החרדים ושומרי תורה
                </h1>
                <h2>
                    {config.description}
                </h2>
                <ul className="list">
                    {config.targets.map(target =>
                        <li className="list-item">
                            <img src={ListItem}/>
                            <h3>{target}</h3>
                        </li>
                    )}
                </ul>

                <h4>יחד מצמצמים את הפערים בחברה ומקדמים את הציבור שלנו לקדמת התעשייה!</h4>
            </header>

            <p>
                <h2>הצטרפו אלינו!</h2>
                {config.networks.map(network => {
                    return (
                        <a className="network-icon" href={network.url}>
                            <img src={network.icon}/>
                        </a>
                    )
                })}
            </p>
        </div>
    );
}

export default App;
