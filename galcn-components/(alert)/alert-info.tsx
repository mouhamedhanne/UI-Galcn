import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertInfoProps {
  title: string;
  description: string;
}

export function AlertInfo({ title, description }: AlertInfoProps) {
  return (
    <Alert
      variant="default"
      className={cn(
        "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:border-blue-500 dark:bg-blue-500/20 dark:text-blue-400",
        "[&>svg]:text-blue-600 dark:[&>svg]:text-blue-400"
      )}
    >
      <Info className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
