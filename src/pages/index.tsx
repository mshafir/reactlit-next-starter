import { Inputs } from "@/components/inputs";
import { Box, Text } from "@radix-ui/themes";
import { textPropDefs } from "@radix-ui/themes/props";
import {
  DataFetchingPlugin,
  LayoutPlugin,
  Reactlit,
  useReactlitState,
} from "@reactlit/core";
import { Main } from "../components/main";

export default function Home() {
  const [appState, setAppState] = useReactlitState({
    name: "",
    weight: "regular",
    size: 1,
  });
  return (
    <Main title="My App">
      <Reactlit
        state={appState}
        setState={setAppState}
        plugins={[LayoutPlugin, DataFetchingPlugin] as const}
      >
        {async ({ display, view }) => {
          const name = view(
            "name",
            Inputs.Text({
              label: "What is your name?",
              placeholder: "Enter name",
            })
          );
          const weight = view(
            "weight",
            Inputs.Radio(["light", "regular", "medium", "bold"] as const, {
              label: "Weight",
            })
          );
          const size = view(
            "size",
            Inputs.Slider({
              label: "Size",
              min: 1,
              max: 9,
            })
          );

          display(
            <Box py={"4"}>
              <hr />
            </Box>
          );
          display(
            <Box py={"2"}>
              <Text
                weight={weight}
                size={`${size}` as (typeof textPropDefs.size.values)[number]}
              >
                Hello to {name ? name : <Text color="red">Enter Name</Text>}{" "}
                from Reactlit!
              </Text>
            </Box>
          );
        }}
      </Reactlit>
    </Main>
  );
}
