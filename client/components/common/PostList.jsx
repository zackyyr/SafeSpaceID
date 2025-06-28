// components/community/PostList.js
import PostItem from "./PostItem";
import detailPosts from '@/app/dashboard/data/DetailPost.json'

export default function PostList({ mode }) {
  return (
    <div>
      {detailPosts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
