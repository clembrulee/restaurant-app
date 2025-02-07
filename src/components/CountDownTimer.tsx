'use client'
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2025-02-08")

const CountDownTimer = () => {
  console.log(endingDate);
  return (
	<Countdown className='font-bold text-5xl text-yellow-400' date={endingDate}/>
  
  )
}

export default CountDownTimer