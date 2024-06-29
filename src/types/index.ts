import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  style?: string | unknown;
  filled?: string | unknown;
};
