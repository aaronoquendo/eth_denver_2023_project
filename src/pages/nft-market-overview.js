import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from "react";

import { getItem, getCollections } from "../redux/actions";

// Component styles
import styles from "./nft-market-overview.module.scss";

export default function NFTMarketOverview() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItem({
      chainId: 1
    }))
    dispatch(getCollections({
      chainId: 1
    }))
  }, []);
  return (
    <div className={styles.NFTMarketOverview}>
      <div className={styles.NFTMarketOverview__inner}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Last</th>
              <th scope="col">Floor Price</th>
              <th scope="col">24h%</th>
              <th scope="col">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
