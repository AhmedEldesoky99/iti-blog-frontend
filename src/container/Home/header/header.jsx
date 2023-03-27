export const Header = ({ username }) => {
  return (
    <div className="hero min-h-screen header-img ">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold capitalize">
            Hello {username?.split(" ")[0]}
          </h1>
          <p className="mb-5 capitalize">
            discover most excited articles and feel free to create your own
          </p>
        </div>
      </div>
    </div>
  );
};
