"use client";

import { useCallback } from "react";
import { toast as sonner } from "sonner";
import type { ReactNode } from "react";

type ToastVariant = "default" | "success" | "destructive" | "loading";

export type ToastOptions = {
  id?: string | number;
  title?: ReactNode;
  description?: ReactNode;
  duration?: number;
  variant?: ToastVariant;
};

export function useToast() {
  const toast = useCallback((opts: ToastOptions) => {
    const { title, description, variant, ...rest } = opts;

    const content =
      title || description ? (
        <div className="space-y-1">
          {title ? <div className="font-medium">{title}</div> : null}
          {description ? (
            <div className="text-sm opacity-90">{description}</div>
          ) : null}
        </div>
      ) : (
        " "
      );

    switch (variant) {
      case "success":
        return sonner.success(content, rest);
      case "destructive":
        return sonner.error(content, rest);
      case "loading":
        return sonner.loading(content, rest);
      default:
        return sonner(content, rest);
    }
  }, []);

  const dismiss = useCallback((id?: string | number) => sonner.dismiss(id), []);

  return { toast, dismiss };
}

// Optional convenience re-export so you can do:
// import { Toaster } from '../ui/use-toast'
export { Toaster } from "sonner";
