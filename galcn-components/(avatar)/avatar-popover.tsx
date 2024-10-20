import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const AvatarWithPopover = ({
  src,
  alt,
  fallback,
  name,
  email,
}: {
  src: string;
  alt: string;
  fallback?: string;
  name: string;
  email: string;
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={src} alt={alt} />
          <AvatarFallback>{fallback || "?"}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <div className="text-center">
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};
