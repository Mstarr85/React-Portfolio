import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontSize: '1.3em'}} to="/">My Portfolio</Link>} scroll>
            <Navigation >
                <Link style={{fontSize: '1.3em'}} to="/resume">Resume</Link>
                <Link style={{fontSize: '1.3em'}} to="/aboutme">About Me</Link>
                <Link style={{fontSize: '1.3em'}} to="/projects">Projects</Link>
                <Link style={{fontSize: '1.3em'}} to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black' }} to="/">My Portfolio</Link>}>
            <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
