import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from "react";
import { getItem, getCollections } from "../redux/actions";
import Link from 'next/link'

// Component styles
import styles from "./nft-market-overview.module.scss";

export default function NFTMarketOverview() {
  const dispatch = useDispatch();
  const collections = useSelector((state) => state.collections);

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
        <table class="table table-light table-striped">
          <thead>
            <tr className='table-light'>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Contract Address</th>
            </tr>
          </thead>
          <tbody>
            {collections && collections.map((collection, index) => {
              return (
                <tr key={index} className='table-light'>
                  <td>
                    <Link className={`nav-link`} href={`/nft-collection/${collection.collection_address}`}>

                      {index}
                    </Link>
                  </td>

                  <td>
                    <Link className={`nav-link`} href={`/nft-collection/${collection.collection_address}`}>
                      {collection.collection_name}
                    </Link>
                  </td>
                  <td>
                    <Link className={`nav-link`} href={`/nft-collection/${collection.collection_address}`}>

                      {collection.collection_address}

                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
