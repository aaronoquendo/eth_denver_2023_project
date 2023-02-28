import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'

// Imported Components
import { FundOutlined, AreaChartOutlined, GlobalOutlined, PieChartOutlined } from '@ant-design/icons';

// CSS
import styles from "./Header.module.scss";

//compoenents

function Header() {
  const dispatch = useDispatch()

  return (
    <div className={`${styles.Header}`}>
      <div className={`${styles.Header__inner}`}>
        <div className={`${styles.Header__Logo}`}>
          Mantis
        </div>
        <div className={`border-2 rounded-3xl border-gray-600 w-auto h-auto flex flex-row justify-center items-center px-2 py-1`}>
          <span className="shortenedWalletAddress pr-3 py-1"></span>
          <svg className="rounded-xl" x="0" y="0" width="16" height="16"><rect x="0" y="0" width="16" height="16" transform="translate(0.1304227296454322 4.927855577974771) rotate(120.4 8 8)" fill="#F26602"></rect><rect x="0" y="0" width="16" height="16" transform="translate(2.8346191115793276 -7.614529838793936) rotate(455.4 8 8)" fill="#F90501"></rect><rect x="0" y="0" width="16" height="16" transform="translate(-4.3037981829296 15.354733016768531) rotate(115.9 8 8)" fill="#C81477"></rect></svg>
        </div>
      </div>
    </div>
  );
}

export default Header;
