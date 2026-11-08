import { Outlet, useParams, useSearchParams, Link } from "react-router-dom";
import { useData } from "../hooks/useData";

import { Card, Grid } from "@mui/material"

export default function PostsPage() {
  
    return (
    <div className="Posts">
      <h1>Posts</h1> 
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams(); // import this hook.
  const limit = searchParams.get('limit') ? searchParams.get('limit') : 5;
  const {data: postsData, loading, error} = useData(
    "https://jsonplaceholder.typicode.com/posts?_limit="+limit
  );
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;

  const postList = postsData?.map?.((post) => (
    <Grid key={post.id} size={{ xs: 6, md: 4 }}>
      <Card>
        <Link to={"/posts/" + post.id}>
          Post #{post.id}: {post.title}
        </Link>
      </Card>
    </Grid>
  ));

  return (
    <div>
      <Grid container columnSpacing={2} rowSpacing={4}>
      <Grid container columnSpacing={2} rowSpacing={4}>
      {postList}
      </Grid>
      <div>
      <Link to="/posts?limit=5">Load 5 Posts</Link>
      </div>
      <div>
      <Link to="/posts?limit=10">Load 10 Posts</Link>
      </div>
      <div>
      <Link to="/posts?limit=20">Load 20 Posts</Link>
      </div>
      </Grid>
    </div>
  );
}
// ++ Change the ‘Load 10 Posts’ link to a drop-down allowing users to choose
// 5, 10 or 20 posts. Use the handleChangeLimit function in the onChange event.

export function Post() {
  const { id } = useParams(); // custom hook to access dynamic params.
  const {data: post, loading, error} = useData(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;
  
  return (
    <Card className="Post">
      {post ? (
        <>
          <h3>Post #{post.id}: {post.title}</h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </Card>
  );
}