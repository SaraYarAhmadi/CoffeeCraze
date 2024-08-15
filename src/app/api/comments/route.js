import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment";
import ProductModel from "@/models/Product";
import UserModel from "@/models/User";

export async function POST(req) {
  try {
    connectToDB();
    const reqBody = await req.json();
    const { username, body, email, score, productID,user } = reqBody;

    // Validation

    const comment = await CommentModel.create({
      username,
      body,
      email,
      score,
      productID,
      user,
    });

    const updatedProduct = await ProductModel.findOneAndUpdate(
      {
        _id: productID,
      },
      {
        $push: {
          comments: comment._id,
        },
      }
    );
    const updatedUser = await UserModel.findOneAndUpdate(
      {
        _id: user,
      },
      {
        $push: {
          comments: comment._id,
        },
      }
    );

    return Response.json(
      {
        message: "Comment created successfully :))",
        data: comment,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return Response.json({ message: err }, { status: 500 });
  }
}

export async function GET() {
  await CommentModel.findOneAndUpdate(
    {},
    {
      isAccept: true,
    }
  );
  const comments = await CommentModel.find({}, "-__v");
  return Response.json(comments);
}
