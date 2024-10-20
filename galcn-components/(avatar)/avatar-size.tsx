import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarWithSizes = ({
  size = "medium",
  src,
  alt,
  fallback,
}: {
  size?: "small" | "medium" | "large";
  src: string;
  alt: string;
  fallback?: string;
}) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <Avatar className={sizeClasses[size]}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback || "?"}</AvatarFallback>
    </Avatar>
  );
};
