const Article = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Article content loaded!</div>;
};

export default Article;
