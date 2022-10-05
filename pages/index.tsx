import { VoltaneApplication } from "../core/voltane-application";

const Home = () => {
  return <></>;
};

export async function getServerSideProps() {
  const voltaneApplication = VoltaneApplication();

  return {
    redirect: {
      permanent: true,
      destination: `/${voltaneApplication.homePath}`,
    },
  };
}

export default Home;
