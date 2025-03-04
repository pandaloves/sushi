import { motion } from "framer-motion";
import { setTransition } from "@/lib/transition";
import { VscLoading } from "react-icons/vsc";
import { ReactElement } from "react";

export function Loading(): ReactElement {
  return (
    <motion.div
      className="flex items-center justify-center"
      {...setTransition({ direction: "top" })}
    >
      <i className="animate-spin text-6xl">
        <VscLoading />
      </i>
    </motion.div>
  );
}
