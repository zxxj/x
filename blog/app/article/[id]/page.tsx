const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>123</div>;
};

export default Page;
