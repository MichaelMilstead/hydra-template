import { HydraClient } from "hydra-ai";
import { ProfileCardList } from "./components/hydra-components/profile-card-list";
import { SendMessageFormList } from "./components/hydra-components/send-message-form-list";
import { getProfiles } from "./services/profile-service";

const hydra = new HydraClient({
  hydraApiKey: "<key here>"
});

const getProfilesTool = {
  getComponentContext: getProfiles,
  definition: {
    name: "getProfiles",
    description: "Get the profiles of users.",
    parameters: [],
  },
};

export const initHydraRegistration = async () => {
  await Promise.all([

  hydra.registerComponent(
    "ProfileCardList",
    "A list of profile cards where each card represents a user and their details.",
    ProfileCardList,
    {
      profiles: "{id: string, name: string, imageUrl: string, about: string}[]",
    },
    [getProfilesTool]
  ),

  hydra.registerComponent("SendMessageFormList", "A list of send message forms", SendMessageFormList, {
    messages: "{id: string, to: string, message: string}[]",
    }),
  ]);
}

export default hydra
