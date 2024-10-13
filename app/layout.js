import NavBar from "@/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Blog App",
  description: "Read & Write For Everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
              <header>
                <NavBar />
              </header>
              <main>
                {children}
              </main>
            </ThemeProvider>   
      </body>
    </html>
  );
}
