import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.appBar}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1 className={styles.primaryHdg}>Fantastical Bestiary</h1>
        <div class="nav">
          <span class="ham">Ham</span>
          <span class="main">Home</span>
          <span class="main">Details</span>
          <span class="main">Edit</span>
        </div>
      </header>
    );
  }
}

export default Header;
