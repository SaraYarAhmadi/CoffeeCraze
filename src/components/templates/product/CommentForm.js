import { IoMdStar } from "react-icons/io";
import { useEffect, useState } from "react";
import showSwal from "../../../utils/helpers";
import { FaRegUserCircle } from "react-icons/fa";

const CommentForm = ({ productID, userId }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState(5);
  const [isSaveUserInfo, setIsSaveUserInfo] = useState(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    const authUser = async () => {
      const res = await fetch("/api/auth/me");

      if (res.status === 200) {
        const data = await res.json();
        setUser({ ...data });
      }
    };

    authUser();
  }, []);

  const setCommentScore = (score) => {
    if (!user?._id) {
      return showSwal(
        "برای اضافه کردن به علاقه مندی‌ها لطفا ابتدا لاگین بکنین",
        "error",
        "فهمیدم"
      );
    }
    setScore(score);
    showSwal("امتیاز شما با موفقیت ثبت شد", "success", "ادامه ثبت کامنت");
  };

  const submitComment = async () => {
    // Validation (You)
    if (!user?._id) {
      return showSwal(
        "برای اضافه کردن به علاقه مندی‌ها لطفا ابتدا لاگین بکنین",
        "error",
        "فهمیدم"
      );
    }
    if (isSaveUserInfo) {
      const userInfo = {
        username,
        email,
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }

    const comment = {
      username,
      email,
      body,
      score,
      productID,
      user: user._id,
    };

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "appliaction/json",
      },
      body: JSON.stringify(comment),
    });

    if (res.status === 201) {
      showSwal("کامنت مورد نظر با موفقیت ثبت شد", "success", "فهمیدم");
    }
  };

  return (
    <div className="w-full md:w-1/2 bg-white dark:bg-darker rounded-2xl p-4.5 sm:p-5 mt-8 mr-auto md:mr-0">
      {" "}
      {/* Modified className for mobile */}
      <div>
        <p className="flex items-center justify-start font-danaDemiBold text-xl md:text-2xl mb-3 sm:mb-4 tex">
          دیدگاه خود را بنویسید
        </p>
        <p className="flex items-center justify-start text-sm mb-3 sm:mb-4">
          نشانی ایمیل شما منتشر نخواهد شد.
        </p>
        <div className="flex items-center justify-start my-2">
          <p>امتیاز شما :</p>
          <div className="flex items-center justify-start text-gray-500">
            <IoMdStar
              className="hover:text-orange-300"
              onClick={() => setCommentScore(5)}
            />
            <IoMdStar
              className="hover:text-orange-300"
              onClick={() => setCommentScore(4)}
            />
            <IoMdStar
              className="hover:text-orange-300"
              onClick={() => setCommentScore(3)}
            />
            <IoMdStar
              className="hover:text-orange-300"
              onClick={() => setCommentScore(2)}
            />
            <IoMdStar
              className="hover:text-orange-300"
              onClick={() => setCommentScore(1)}
            />
          </div>
        </div>
        <textarea
          rows={6}
          value={body}
          onChange={(event) => setBody(event.target.value)}
          className="w-full block p-4.5 md:p-4 bg-gray-100 dark:bg-dark text-gray-900 dark:text-white placeholder:text-slate-500/70 font-danaMedium text-sm rounded-xl"
          placeholder="نظر خود را بنویسید ..."
        ></textarea>
        <div className="py-2">
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
            name="email"
            id="email"
            placeholder="نام"
          />
        </div>
        <div className="py-2">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            id="email"
            className="w-full p-2 border border-gray-400 rounded-md placeholder:text-gray-500"
            placeholder="ایمیل (دلخواه)"
          />
        </div>
        <div className="flex items-center w-full py-3">
          <input type="checkbox" name="ch" id="ch" />
          <p className="text-sm mb-1 mr-1">مرا به یاد داشته باش</p>
        </div>
        <div className="flex gap-x-4 justify-end mt-4.5 sm:mt-6">
          <button
            className="flex-grow sm:grow-0 sm:w-36 bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
            onClick={submitComment}
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
