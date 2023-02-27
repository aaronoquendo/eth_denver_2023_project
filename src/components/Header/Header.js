import React, { useState, useEffect } from "react";

// Util functions

// Imported Components

// Redux actions

// CSS
import styles from "./Header.module.scss";

function Header() {

  useEffect( () => {

  }, [])

  return (
    <div className={`${styles.Header} mx-auto px-4 h-50 py-5  h-24 flex w-full flex-row justify-between`}>
      Header
    </div>
  );
}

export default Header;
