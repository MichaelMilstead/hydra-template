import { Profile } from "@/model/profile";
import ProfileCard from "./profile-card";

interface ProfileCardListProps {
  profiles: Profile[];
}

export const ProfileCardList = ({ profiles }: ProfileCardListProps) => {
  return (
    <div className=" flex flex-row overflow-auto mt-10 p-5">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};
