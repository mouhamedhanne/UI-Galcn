import { AlertInfo } from "@/galcn-components/(alert)/alert-info";
import { AlertSuccess } from "@/galcn-components/(alert)/alert-success";
import { AlertWarning } from "@/galcn-components/(alert)/alert-warning";
import { AvatarWithBadge } from "@/galcn-components/(avatar)/avatar-badge";
import { AvatarWithPopover } from "@/galcn-components/(avatar)/avatar-popover";
import { AvatarWithSizes } from "@/galcn-components/(avatar)/avatar-size";
import { AvatarUserMenu } from "@/galcn-components/(avatar)/avatar-user-menu";
import { SwitchTheme } from "@/galcn-components/(switch)/switch-theme";
import { LogOut, User, BookOpenText, Home } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const profile =
    "https://lh3.googleusercontent.com/a/ACg8ocJ0anziP8-K1FnVtkAp9OIv0kBWLq2eOlUS5tH-ZWicTHiprbGa=s96-c";

  return (
    <main>
      <div className="flex h-screen flex-col justify-center text-center">
        <h1 className="mb-4 text-2xl font-bold text-green-900">Hello World</h1>
        <p className="text-fd-muted-foreground">
          You can open{" "}
          <Link
            href="/docs"
            className="text-fd-foreground font-semibold underline"
          >
            /docs
          </Link>{" "}
          and see the documentation.
        </p>
      </div>

      <div className="bg-red-500">
        <p className="text-green-600">sqjlf</p>
      </div>

      <AlertSuccess
        title="oooh succes"
        description="this is a description component alert success"
      />

      <AlertInfo
        title="oooh infos"
        description="this is a description component alert infos"
      />

      <AlertWarning
        title="oooh warning"
        description="this is a description component alert warning"
      />

      <div className="flex justify-center space-x-4">
        <div>
          <AvatarWithSizes
            src="https://lh3.googleusercontent.com/a/ACg8ocJ0anziP8-K1FnVtkAp9OIv0kBWLq2eOlUS5tH-ZWicTHiprbGa=s96-c"
            alt="une image"
          />
        </div>
        <div className="flex justify-center space-y-2">
          <AvatarWithBadge
            src="https://lh3.googleusercontent.com/a/ACg8ocJ0anziP8-K1FnVtkAp9OIv0kBWLq2eOlUS5tH-ZWicTHiprbGa=s96-c"
            alt="une image"
            fallback="SH"
            status="online"
          />
          <AvatarWithBadge
            src="https://lh3.googleusercontent.com/a/ACg8ocJ0anziP8-K1FnVtkAp9OIv0kBWLq2eOlUS5tH-ZWicTHiprbGa=s96-c"
            alt="une image"
            fallback="SH"
            status="offline"
          />

          <AvatarWithPopover
            src={profile}
            alt="une image"
            name="Shadcn"
            email="shadcn@example.com"
          />

          <AvatarUserMenu
            user={{
              name: "John Doe",
              email: "john@example.com",
              image:
                "https://lh3.googleusercontent.com/a/ACg8ocJ0anziP8-K1FnVtkAp9OIv0kBWLq2eOlUS5tH-ZWicTHiprbGa=s96-c",
            }}
            menus={[
              { label: "Home", href: "/", icon: Home },
              { label: "Docs", href: "/docs", icon: BookOpenText },
              { label: "Account", href: "/account", icon: User },
            ]}
          />

          <SwitchTheme />
        </div>
      </div>
    </main>
  );
}
