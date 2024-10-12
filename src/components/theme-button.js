"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";

// export function ModeToggle() {
//   const { theme, setTheme } = useTheme();

//   const toggleTheme = () => {
//     if (theme === "light") {
//       setTheme("dark");
//     } else if (theme === "dark") {
//       setTheme("system");
//     } else {
//       setTheme("light");
//     }
//   };

//   return (
//     <Button variant="outline" size="icon" onClick={toggleTheme}>
//       {theme === "light" && <Sun className="h-[1.2rem] w-[1.2rem]" />}
//       {theme === "dark" && <Moon className="h-[1.2rem] w-[1.2rem]" />}
//       {theme === "system" && (
//         <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:scale-0 dark:rotate-90" />
//       )}
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   );
// }
