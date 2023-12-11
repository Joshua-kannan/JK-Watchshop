// app/components/Footer.tsx

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white mt-10 border-t">
        <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">&copy; {new Date().getFullYear()} Jk Watch Shop.</p>
              <p className="text-sm">Explore my meticulously crafted portfolio, showcasing a cutting-edge ecommerce demo. Developed with Next.js 14 for dynamic frontend, Shadcn for refined styling, and empowered by Sanity.io for streamlined content management. Integrating Stripe ensures secure transactions, reflecting a commitment to excellence in both design and technology. <br /> Dive into sophistication and functionality! 🚀💼</p>
            </div>
            {/* Add more footer links or content here */}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  