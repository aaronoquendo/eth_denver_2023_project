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
        <div class="d-flex align-items-start mx-4">
          <div class={`${styles.Sidebar__nav} nav flex-column nav-pills me-3`} id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <Link className={`${styles.Sidebar__menuItemLink} nav-link`} href="/nft-market-overview">

              <div class="d-flex nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <div className={`${styles.Sidebar__menuItemIconWrapper}`}>
                  <PieChartOutlined />
                </div>
                <div> NFT Collections </div>
              </div>

            </Link>
            <div class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              <Link className={`${styles.Sidebar__menuItemLink} nav-link`} href="/nft-portfolio">
                <div className={`${styles.Sidebar__menuItemIconWrapper}`}>
                  <GlobalOutlined />
                </div>

                <div> My NFT Portfolio </div>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Sidebar;
