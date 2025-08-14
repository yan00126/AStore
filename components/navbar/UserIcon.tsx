import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  // const { userId } = auth();
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <Image
        alt="profileImage"
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
