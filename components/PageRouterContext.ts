import { createContext } from "react";

export default createContext<PageRouterContextValue>({
  showContent: false,
  clickLink: () => {},
  onAnimationComplete: () => {}
});

export interface PageRouterContextValue {
  showContent: boolean;
  clickLink: (href: string) => void;
  onAnimationComplete: () => void;
}