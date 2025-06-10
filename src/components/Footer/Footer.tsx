const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} Ahmed Khaled. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
