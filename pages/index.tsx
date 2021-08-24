import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";

const HomePage = (props: any) => {
  // console.log(props.images["0"].filename);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prisma = new PrismaClient();
  const images = await prisma.images.findMany();

  return {
    props: { images },
  };
};

export default HomePage;
