import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";

type Props = {
  end: number;
  style?: React.CSSProperties;
};

const HtmlContent: React.FC<Props> = ({ end, style, ...props }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, end, { duration: 5 });
    return () => controls.stop();
  }, []);

  return (
    <motion.pre style={style} {...props}>
      {rounded}
    </motion.pre>
  );
};

export default HtmlContent;
