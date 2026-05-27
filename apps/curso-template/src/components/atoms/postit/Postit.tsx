
import React from "react";
import topImg from "../../../assets/postit/top.png";
import bottomImg from "../../../assets/postit/bottom.png";
import styles from "./Postit.module.css";

interface PostitProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const Postit: React.FC<PostitProps> = ({ children, style, className }) => {
  return (
    <div
      className={`${styles.postitContainer} ${className || ""}`}
      style={{ width: 383, minHeight: 397, ...style }}
    >
      {/* Top image */}
      <img src={topImg} alt="Postit Top" className={styles.topImg} />
      {/* Body + Bottom image */}
      <div className={styles.body} style={{ position: "relative", minHeight: 339, fontSize: 22}}>
        <div className={styles.bodyContent} style={{paddingBottom: 35, paddingTop: 40, paddingInline:32, textAlign: "left"}}>{children}</div>
        <img src={bottomImg} alt="Postit Bottom" className={styles.bottomImg} />
      </div>
    </div>
  );
};

export default Postit;
