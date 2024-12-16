import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export function ReactlitTag() {
  return (
    <Flex py={"4"} justify={"center"}>
      <Link
        href="https://mshafir.github.io/reactlit/"
        target="_blank"
        className="group cursor-pointer hover:animate-pulse"
      >
        <Flex gap={"2"} align={"center"}>
          <Image src="/reactlit.svg" alt="Reactlit" width={20} height={20} />
          <Text
            size={"1"}
            color="gray"
            className="group-hover:text-foreground transition-colors"
          >
            Built with Reactlit
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
