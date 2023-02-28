import React, { useState } from "react";
import Link from 'next/link'

// Imported Components
import { GlobalOutlined, PieChartOutlined } from '@ant-design/icons';

// Component styles
import styles from "./Sidebar.module.scss";

function Sidebar() {

  return (
    <div className={`${styles.Sidebar} SideBar`}>
      <div className={styles.Sidebar.__menuItems}>

        <nav class={`${styles.Sidebar__nav} nav flex-column nav-pills mt-4 px-2 `}>
          <div class={`${styles.Sidebar__navItem} nav-link active`} aria-current="page" href="#">
            <Link className={`${styles.Sidebar__menuItemLink} nav-link`} href="/nft-market-overview">
              <div className={`${styles.Sidebar__menuItemIconWrapper}`}>
                <PieChartOutlined />
              </div>

              <span className={`${styles.Sidebar__menuItemSpan1}`} >
                <span className={`${styles.Sidebar__menuItemSpan2} ml-2`} >
                  NFT Collections
                </span>
              </span>
            </Link>
          </div>
          <div class={`${styles.Sidebar__navItem} nav-link`} aria-current="page" href="#">
            <Link className={`${styles.Sidebar__menuItemLink} nav-link`} href="/nft-portfolio">
              <div className={`${styles.Sidebar__menuItemIconWrapper}`}>
                <GlobalOutlined />
              </div>

              <span className={`${styles.Sidebar__menuItemSpan1}`} >
                <span className={`${styles.Sidebar__menuItemSpan2} ml-2`} >
                  MY NFT Portfolio
                </span>
              </span>
            </Link>
          </div>
   
        </nav>

      </div>
    </div>
  );
}

export default Sidebar;
