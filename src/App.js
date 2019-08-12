import React, { Component } from 'react';
import logo from './logo.png';
import ListItem from "./images/listItemWhite.png";
import config from './config';
import { Link } from "@material-ui/core"
import './App.css';
import styled from "styled-components";
import classnames from "classnames";

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: fit-content;
    flex-wrap: wrap;
    margin-right: 17%;
`;

const StyledLink = styled(Link) `
  display: flex;
  flex-direction: column;
`;

const Description = styled.h2`
  padding: 5%;
`;

const RightSide = styled.div`
  border-left: 2px gray solid;
  flex: 50;
`;

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentDidMount(){
    
        // TODO: you can add settimeout before change the state
        this.setState({ loadded: true })
    }
    
    render() {
        return (
            <div className="App">
                <header className={classnames( "App-header", (this.state.loadded && 'app-header-background' ))}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        קהילת המפתחים החרדים ושומרי התורה
                </h1>
                    <div className='description-container'>
                        <RightSide>
                            <Description>
                                {config.description}
                            </Description>
                        </RightSide>
                        <ul className="list">
                            {config.targets.map(target =>
                                <li key={target} className="list-item">
                                    <img src={ListItem} />
                                    <h3>{target}</h3>
                                </li>
                            )}
                        </ul>
                    </div>

                    <h4 className='bottom-line'>יחד מצמצמים את הפערים בחברה ומקדמים את הציבור שלנו לקדמת התעשייה!</h4>
                </header>

                <p>
                    <h2>הצטרפו אלינו!</h2>
                    <LinksContainer>
                        {config.networks.map(network => {
                            return (
                                <StyledLink key={network.displayName} className="network-icon" href={network.url}>
                                    <img src={network.icon} />
                                    <span>{network.displayName}</span>
                                </StyledLink>
                            )
                        })}
                    </LinksContainer>
                </p>
            </div>
        );
    }
}

export default App;
