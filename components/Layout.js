import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="fex fex-col justify-between min-h-screen">
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
