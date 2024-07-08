import connectToDB from "../../../../../configs/db";

export async function GET(req) {
  await connectToDB();

  return Response.json(
    { message: "User signed up successfully :))" },
    { status: 201 }
  );
}
