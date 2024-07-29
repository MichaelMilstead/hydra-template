import { Card } from "@/components/ui/card";
import { Profile } from "@/model/profile";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="w-full max-w-md flex items-center gap-6 p-4 sm:p-6">
      <div className="flex-shrink-0 rounded-full overflow-hidden w-20 h-20 sm:w-24 sm:h-24">
        <img
          src={profile.imageUrl}
          width={96}
          height={96}
          alt="User Avatar"
          className="object-cover"
        />
      </div>
      <div className="grid gap-2">
        <div className="text-xl font-semibold">{profile.name}</div>
        <p className="text-muted-foreground">{profile.about}</p>
      </div>
    </Card>
  );
}
