import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertWarningProps {
  title: string;
  description: string;
}

export function AlertWarning({ title, description }: AlertWarningProps) {
  return (
    <Alert
      variant="default"
      className={cn(
        "border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:border-yellow-500 dark:bg-yellow-500/20 dark:text-yellow-400",
        "[&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400"
      )}
    >
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
