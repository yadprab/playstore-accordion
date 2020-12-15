import React, { useState } from "react";
import {apps} from '../data';
import {AppsSection} from './Apps-Section';
const Container = () => {
    const arr = [...apps]

  const [update, setUpdate] = useState(false);

  return (
    <>
      <section className="apps--container">
        <section className="row1">
          <p>update pending({arr.length})</p>
          <button id="update--all" onClick={()=>{setUpdate(!update)}}>{update?'stop':'update all'}</button>
        </section>
        <section className='row2'>
          <AppsSection data={arr} updateAll={update}/>

        </section>
      </section>
    </>
  );
};

export { Container };
