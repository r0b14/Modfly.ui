import pceBgClosed from "./assets/pce/bgClosed.svg";
import pceBgOpen   from "./assets/pce/bgOpen.svg";
import pceArrow    from "./assets/pce/arrow.svg";

export type CourseVariant = "pce";

export interface CourseAccordionAssets {
  bgClosed: string;
  bgOpen:   string;
  arrow:    string;
}

export const courseAccordionAssets: Record<CourseVariant, CourseAccordionAssets> = {
  pce: { bgClosed: pceBgClosed, bgOpen: pceBgOpen, arrow: pceArrow },
};
