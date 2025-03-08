import { useToast as useToastHook, toast as toastHook } from "@/components/ui/toast"

export const toast = toastHook

export function useToast() {
  return useToastHook()
} 