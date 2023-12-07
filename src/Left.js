import React from 'react';
import './Left.css'
import { useState } from 'react';

function Left({name}) {

  const [partner, setPartner] = useState(null);
  //const [isDialogOpen, setIsDialogOpen] = useState(false);
  //const [isAcceptOpen, setIsAcceptOpen] = useState(false);

  // const accept = (name) => {
  //   console.log("Userid: " + name.userid + " Username:" + name.username + "Age:"+name.age+"Gender: "+name.gender+"Year: "+name.year);
  //   setPartner(name);
    
  // };

  /*const handleCreateClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setIsAcceptOpen(false);
    
  };*/
  return (
    <div className='Info'>
      <h2>Profile</h2>
    
      <p className='black'>{name.username}</p>
    </div>
  );
}

export default Left;

