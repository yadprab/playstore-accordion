import React from "react";
import {Article} from './Article'
const AppsSection = (appsObj) => {


  const { data, updateAll } = appsObj;
  

  return (
    <>
      {data.map((apps) => {
          const { id, name, image, title, text }=apps;

        return (
       <Article state={updateAll} id={id} name={name} image={image} title={title} text={text}/>
      
        );
      })}
    </>
  );
};

export { AppsSection };
