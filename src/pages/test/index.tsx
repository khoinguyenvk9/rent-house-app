import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter()
  return (
    <div className="wrapper-body">
      <div className="top-content bg-green-400">TOP content</div>
      <div className="main-content bg-orange-400">
        <h1>asdsahj</h1>
        <p>asdashj</p>
      </div>
      <div className="bottom-content" onClick={() => router.push('/')}>Bototm content</div>
    </div>
  );
};

export default Test;
