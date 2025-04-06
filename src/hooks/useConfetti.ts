import { useCallback } from "react";
import { launchConfetti } from "../utils/confetti";

export default function useConfetti() {
  const fire = useCallback(() => {
    launchConfetti();
  }, []);

  return fire;
}
