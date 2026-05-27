const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-5 lg:mx-32 flex-col items-center flex">
      <div className="flex flex-col items-center max-w-[1200px] w-full">
        {children}
      </div>
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}


export default Layout;
