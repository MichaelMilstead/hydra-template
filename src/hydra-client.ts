import { HydraClient } from "hydra-ai-backup";
import { ProfileCardList } from "./components/hydra-components/profile-card-list";
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

export default hydra;
