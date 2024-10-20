import Link from "next/link";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export type MenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export type AvatarUserMenu = {
  user: {
    name: string;
    email: string;
    image?: string;
  };
  menus?: MenuItem[];
};

export const AvatarUserMenu = ({ user, menus = [] }: AvatarUserMenu) => {
  return (
    <DropdownMenu>
      <AlertDialog>
        <TooltipProvider disableHoverableContent>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
                    {user?.image && (
                      <AvatarImage
                        src={user.image}
                        alt={user.name ?? "user picture"}
                      />
                    )}
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="bottom">Profile</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {menus.map((menu, index) => (
              <DropdownMenuItem
                key={index}
                className="hover:cursor-pointer"
                asChild
              >
                <Link href={menu.href} className="flex items-center">
                  <menu.icon className="w-4 h-4 mr-3 text-muted-foreground" />{" "}
                  {/* Utilisation correcte de l'icône */}
                  {menu.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <AlertDialogTrigger asChild>
            <DropdownMenuItem className="hover:cursor-pointer">
              <LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
              Sign out
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to logout?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant="secondary">Cancel</Button>
            </AlertDialogCancel>
            <Button variant="destructive">Logout</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
};
