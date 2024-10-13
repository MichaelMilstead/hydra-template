import { HydraClient } from "hydra-ai";
import { ProfileCardList } from "./components/hydra-components/profile-card-list";
import { SendMessageFormList } from "./components/hydra-components/send-message-form-list";
import { getProfiles } from "./services/profile-service";

const hydra = new HydraClient({
  hydraApiKey: "41a06403c20a115b6c4a9d93eb4eef0f.cda1a222c93352f270e83a8d3ed3e418ddb87e9bb4a4cc712dd91f3e962943f36ab0d2cfe1bdc0be1649a4e056aede8822a4acd32eb3edfe1671c7fc1ef311b1"
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
