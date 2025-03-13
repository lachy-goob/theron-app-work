'use client'

import {notfoundgif} from "./ui/images"

export default function Custom404() {


  return (
    <div className ="flex flex-col align-middle items-center justify-center">
      <h1 className="font-bold text-[50px]"> 404 </h1>
      <div>{notfoundgif()}</div>
  <h2>You seem lost, this page doesn't exist.</h2>
  <br></br><p> I wonder how you got here in the first place...</p>
  </div>
  )
}