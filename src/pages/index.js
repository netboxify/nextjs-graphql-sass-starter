import Button from "../common/components";

const Home = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Button />
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      title: "NextJS starter",
    },
  };
}

export default Home;
