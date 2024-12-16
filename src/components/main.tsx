import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Box, Button, Container, Flex, Text, Tooltip } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { ReactlitTag } from "./reactlit-tag";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Main({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      <main>
        <Head>
          <title>{title}</title>
        </Head>
        <Box style={{ background: "var(--gray-2)" }}>
          <Flex direction="column" height="100vh">
            <Flex
              width="100%"
              p="4"
              align="center"
              style={{
                background: "var(--color-background)",
                borderBottom: "1px solid var(--gray-4)",
              }}
            >
              <Text size="3" weight={"bold"}>
                {title}
              </Text>
              <Box flexGrow={"1"} />
              <Tooltip content="Toggle theme">
                <Button
                  size="2"
                  variant="ghost"
                  onClick={() =>
                    setTheme(resolvedTheme === "light" ? "dark" : "light")
                  }
                >
                  {resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Tooltip>
            </Flex>
            <Flex flexGrow={"1"} direction={"column"} overflow={"auto"}>
              <Container size="4" flexGrow={"1"} height={"100%"}>
                <Box
                  p="4"
                  style={{
                    background: "var(--color-background)",
                    boxShadow: "var(--shadow-3)",
                    minHeight: "30rem",
                    overflow: "hidden",
                  }}
                >
                  {children}
                </Box>
              </Container>
              <Box flexGrow={"1"} />
              <ReactlitTag />
            </Flex>
          </Flex>
        </Box>
      </main>
    </div>
  );
}
