import React, { useRef, useEffect } from "react";
import { noop } from "../utils/misc";

interface NuiEventData {
  action: string;
  data: any; // Substitua 'any' por um tipo mais específico se possível
}

/**
 * A hook that manages event listeners for receiving data from the client scripts
 * @param action The specific `action` that should be listened for.
 * @param handler The callback function that will handle data relayed by this hook
 */
export const useNuiEvent = (action: string, handler: (data: any) => void = noop) => {
  const savedHandler = useRef(handler);

  // Make sure we handle for a reactive handler
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: MessageEvent & { data: NuiEventData }) => {
      const { action: eventAction, data } = event.data;

      if (savedHandler.current) {
        if (eventAction === action) {
          savedHandler.current(data);
        }
      }
    };

    window.addEventListener("message", eventListener);
    // Remove Event Listener on component cleanup
    return () => window.removeEventListener("message", eventListener);
  }, [action]);
};