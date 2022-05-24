import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Search(props) {
    return (
      <div>
        <header className="main-header">
            <h2>Come and hunt your target college!</h2>
        </header>
        <Outlet />
      </div>    
    )
  }
