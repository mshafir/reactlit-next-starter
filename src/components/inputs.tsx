import { Flex } from "@radix-ui/themes";
import { configureInputs } from "@reactlit/radix";

export const Inputs = configureInputs({
  wrapper: (children) => (
    <Flex direction="column" gap="1" py="2" maxWidth={"20rem"}>
      {children}
    </Flex>
  ),
});
