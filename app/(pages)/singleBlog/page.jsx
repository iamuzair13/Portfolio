export default function SingleBlogPage({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Blog Post {id}</h1>
    </div>
  );
}
