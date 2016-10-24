import React from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';

class App extends React.Component {
    render() {
        return (
            <div style={{height:'100%'}}>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;
