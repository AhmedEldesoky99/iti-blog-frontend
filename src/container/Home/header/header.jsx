import { Navbar } from "../../../components/navbar/navbar";

export const Header = () => {
  return (
    <div className="hero min-h-screen header-img ">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello Ahmed</h1>
          <p className="mb-5">
            discover most excited articles and feel free to create your own
          </p>
        </div>
      </div>
    </div>
  );
};
