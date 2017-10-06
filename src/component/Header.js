import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../css/Header.css';
import PropTypes from 'prop-types';

/**
 * Header
 * Component which is present on all the screens
 *
 * @class Header
 * @author Chetan Sai Kumar Thalisetty [tchetan1@umbc.edu]
 */
export default class Header extends Component {
    constructor(props){
        super(props);
    }

    /**
     * Mainly used for rendering the component
     * this is called for every state change
     */
    render(){
        return(
            <div className="header-background">
                {this.renderImage()}
                {this.renderUserOptions()}
            </div>
        );
    }

    /**
     * renders users login options like help, login, sign up etc
     */
    renderUserOptions(){
        if(this.props.show) {
            return(
                <div className="divUserOptions">
                    <button className="buttonStyle" value="Help" onclick={this.props.onHelpClick}>Help</button>
                    <button className="buttonStyle" value="SignUp">SignUp</button>
                    <button className="buttonStyle" value="Login">Login</button>
                </div>
            );
        }
        return null;
    }

    /**
     * Renders the logo at the left corner of the webpage
     */
    renderImage(){
        return(
            <img src={logo} className="header-logo" alt="logo"/>
        );
    }
}

Header.propTypes = {
    show: PropTypes.bool,
    onHelpClick: PropTypes.func,
    onLoginClick: PropTypes.func,
    onSignUpClick: PropTypes.func
};

Header.defaultProps = {
    show: true,
    onHelpClick: () => {},
    onLoginClick: () => {},
    onSignUpClick: () => {}
};
