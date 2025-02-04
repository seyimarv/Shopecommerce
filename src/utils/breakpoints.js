const breakpoints = {
  sm: 480,
  md: 768,
  lg: 976,
  xl: 1200,
};

const toPixelBreakpoints = (breakpoints) => {
  return Object.fromEntries(
    Object.entries(breakpoints).map(([key, value]) => [key, `${value}px`])
  );
};

export const pixelBreakpoints = toPixelBreakpoints(breakpoints);

export default breakpoints;
