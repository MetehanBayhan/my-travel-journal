import react from "react";
import { GiWorld } from 'react-icons/gi';

export default function Header() {
  return (
    <div className="header">
      <div className="header--content container">
        <GiWorld  className="header--icon"/>
        <h1 className="header--title">my travel journal.</h1>
      </div>  
    </div>
  )
}