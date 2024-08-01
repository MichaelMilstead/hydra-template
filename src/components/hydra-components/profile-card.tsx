import { Card } from "@/components/ui/card";
import { Profile } from "@/model/profile";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="w-[210px] min-w-[210px] mx-5 flex flex-col sm:flex-row items-center justify-center gap-6 p-4 sm:p-6 shadow-lg">
      <div className="flex-shrink-0 flex justify-center items-center rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="rounded-full h-20 w-20"
        />
      </div>
      <div className="grid gap-2 text-center sm:text-left">
        <div className="text-xl font-semibold">{profile.name}</div>
        <p className="text-muted-foreground">{profile.about}</p>
      </div>
    </Card>
  );
}
