import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AvatarWithBadge = ({
  src,
  alt,
  fallback,
  status,
}: {
  src: string;
  alt: string;
  fallback?: string;
  status?: "online" | "offline";
}) => {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{fallback || "?"}</AvatarFallback>
      </Avatar>
      <span
        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full ${
          status === "online" ? "bg-green-500" : "bg-gray-400"
        }`}
      />
    </div>
  );
};
