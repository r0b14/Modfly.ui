import React from "react";
import pceBgClosed from "./assets/pce/bgClosed.svg";
import pceBgOpen   from "./assets/pce/bgOpen.svg";
import pceArrow    from "./assets/pce/arrow.svg";

export type CourseVariant = "pce";

type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface CourseAccordionAssets {
  bgClosed: SvgComponent;
  bgOpen:   SvgComponent;
  arrow:    SvgComponent;
}

export const courseAccordionAssets: Record<CourseVariant, CourseAccordionAssets> = {
  pce: { bgClosed: pceBgClosed, bgOpen: pceBgOpen, arrow: pceArrow },
};
