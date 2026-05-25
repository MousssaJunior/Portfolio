"use client";

import styles from "./Tabs.module.css";
import React, { useState } from "react";
import { TabsData } from "../../data/TabsData";

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={styles.Tabs}>
      <div className={styles.Container}>
        {TabsData.map((obj, index) => (
          <button
            className={styles.Button}
            key={index}
            onClick={() => setSelectedTab(index)}
          >
            {obj.tabTitle}
          </button>
        ))}
      </div>

      <div className={styles.txt}>
        <h4 className={styles.Title}>
          {TabsData[selectedTab].tabHeading}
        </h4>
   <div className={styles.ContainerImg}>
       
        {TabsData[selectedTab].images.map((img, index) => (

          
          <img key={index} src={`/${img}`} alt="#" className={styles.img} />
        ))}

     
</div  >
        <p className={styles.p}></p>
      </div>
    </div>
  );
}