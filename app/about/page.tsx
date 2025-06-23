import db from "@/utils/db";
import { log } from "console";

async function AboutPage() {
  const profile = await db.testProfile.create({
    data: {
      name: "random name",
    },
  });

  const users = await db.testProfile.findMany();
  console.log(profile);

  return (
    <div>
      {users.map((user) => {
        return (
          <h2 key={user.id} className="text-2xl font-bold">
            {user.name}
          </h2>
        );
      })}
    </div>
  );
}
export default AboutPage;
