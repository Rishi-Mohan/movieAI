import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen h-screen bg-cover object-cover"
          //src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_medium.jpg"
          src="https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="backgroundImage"
        />
      </div>
      <div className="">
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
          <h1 className="font-bold text-3xl py-4"> Sign In </h1>
          <input
            tyoe="text"
            placeholder="Email address"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <input
            tyoe="password"
            placeholder="password"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
