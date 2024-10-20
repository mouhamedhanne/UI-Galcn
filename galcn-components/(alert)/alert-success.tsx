import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertSuccessProps {
  title: string;
  description: string;
}

export function AlertSuccess({ title, description }: AlertSuccessProps) {
  return (
    <Alert
      variant="default"
      className={cn(
        "border-green-500/50 bg-green-500/10 text-green-700 dark:border-green-500 dark:bg-green-500/20 dark:text-green-400",
        "[&>svg]:text-green-600 dark:[&>svg]:text-green-400"
      )}
    >
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
