"use client";

import styles from "./Tabs.module.css";
import React, { useState } from "react";
import { TabsData } from "../../data/TabsData";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  console.log(TabsData);
    console.log("Tab cliqué :", selectedTab);
  return (
    <div className={styles.Tabs}>
      <div className={styles.Container}>
       {TabsData.map((obj , index)  => ( 

          <button className={styles.Button} 
             key={index}
             onClick={() => setSelectedTab(index)}
             >
         

             {TabsData[index].tabTitle} 

             </button>


       ))}
      </div>
     <div className={styles.txt}>  
         <h4  className={styles.Title}>

           {TabsData[selectedTab].tabHeading}
         </ h4>

            <p className={styles.p}>
             {TabsData[selectedTab].txt}
         </p>

     </div>

    
    </div>
  );
}