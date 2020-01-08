import React, {useCallback, useState} from 'react';
import logo from './logo.png';
import ListItem from "./images/listItemWhite.png";
import config from './config';
import {Link} from "@material-ui/core"
import './App.css';
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import {slide as Menu} from 'react-burger-menu'

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: fit-content;
    flex-wrap: wrap;
    margin-right: 17%;
`;

const StyledLink = styled(Link)`
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

function App() {
    const [menuOpenState, setMenuOpenState] = useState(false);
    const [exampleModal, toggleExampleModal] = useModali();
    const openAboutAsModal = useCallback(() =>{
        setMenuOpenState(null);
        const aa = menuOpenState;
        // this.setState({menuOpenState: false});
        // toggleExampleModal();
    }, [menuOpenState, setMenuOpenState]);
    return (
        <div id='outer'>
            {/*<Menu*/}
            {/*    right*/}
            {/*    isOpen={menuOpenState}*/}
            {/*    outerContainerId={ "outer" }*/}
            {/*    menuClassName='men-menu'*/}
            {/*    pageWrapId={ "page-wrap" }>*/}
            {/*    <a onClick={() => openAboutAsModal() } className="menu-item">קצת עלינו</a>*/}
            {/*</Menu>*/}
            {/*<Modali.Modal {...exampleModal}>*/}
            {/*    Hi, I'm a Modali!*/}
            {/*</Modali.Modal>*/}
            <div id='page-wrap' className="App">
                <header className="App-header">

                    <img src={logo} className="App-logo" alt="logo"/>
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
                                    <img src={ListItem}/>
                                    <h3>{target}</h3>
                                </li>
                            )}
                        </ul>
                    </div>

                    <h4 className='bottom-line'>יחד מצמצמים את הפערים בחברה ומקדמים את הציבור שלנו לקדמת התעשייה!</h4>
                </header>


                <div>
                    <ImageGallery
                        isRTL={true}
                        showThumbnails={false}
                        additionalClass='image-list'
                        lazyLoad={true}
                        items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => ({
                            original: `https://ddos-app-server.herokuapp.com/static/${n}.jpeg`,
                            sizes: ''
                        }))}/>
                </div>


                <h2 className='joinas'>הצטרפו אלינו!</h2>
                <div className='newsletter'>
                    <iframe src="https://cdn.forms-content.sg-form.com/2a9b218c-e072-11e9-bae4-aa9125e90ff8"/>
                </div>
                <LinksContainer>
                    {config.networks.map(network => {
                        return (
                            <StyledLink key={network.url} className="network-icon" target='_blank' href={network.url}>
                                <img src={network.icon}/>
                                <span>{network.displayName}</span>
                            </StyledLink>
                        )
                    })}
                </LinksContainer>
            </div>
        </div>
    );
}

export default App;
