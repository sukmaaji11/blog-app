import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-5 px-3 max-w-6xl mx-auto">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-5 flex flex-col gap-8">
        <Link className="font-bold dark:text-white text-4xl" to="/">
          <span className="px-2 py-1 bg-gradient-to-r from-green-700 to-blue-500 rounded-lg text-white">
            News
          </span>
        </Link>
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center"></h2>
            <div className="flex flex-wrap gap-6">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
