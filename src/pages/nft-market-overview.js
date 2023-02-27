import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from "react";

import { getItem } from "../redux/actions";

export default function NFTMarketOverview() {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(getItem({
      chainId: 1
    }))
  }, []);
  return (
    <div>
      
    </div>
  )
}
