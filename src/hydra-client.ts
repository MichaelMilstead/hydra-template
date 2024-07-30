import { HydraClient } from "hydra-ai";
import { ProfileCardList } from "./components/hydra-components/profile-card-list";
import { SendMessageFormList } from "./components/hydra-components/send-message-form-list";
import { getProfiles } from "./services/profile-service";

const hydra = new HydraClient();

hydra.registerComponent(
  "ProfileCardList",
  ProfileCardList,
  {
    profiles: "{id: string, name: string, imageUrl: string, about: string}[]",
  },
  getProfiles
);

hydra.registerComponent("SendMessageFormList", SendMessageFormList, {
  messages: "{id: string, to: string, message: string}[]",
});

export default hydra;
