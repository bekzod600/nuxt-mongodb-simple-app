export default defineEventHandler(async (event) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const data = await response.json();

  return {
    props: { post: data },
  };
});
