import { assets } from "../assets/assets";
 

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full text-gray-300 pt-8 mt-8">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500 pb-10">
          {/* Left side: logo and about */}
          <div className="md:max-w-96">
            <img
              alt="Company Logo"
              className="h-11 bg-white"
              src={assets.logo}
            />
            <p className="mt-4 text-sm">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
                alt="Google Play"
                className="h-10 w-auto border border-white rounded"
              />
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
                alt="App Store"
                className="h-10 w-auto border border-white rounded"
              />
            </div>
          </div>

          {/* Right side: links and contact */}
          <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
            <div>
              <h2 className="font-semibold mb-5">Company</h2>
              <ul className="text-sm space-y-2">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-5">Get in touch</h2>
              <div className="text-sm space-y-2">
                <p>+1-234-567-890</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <p className="pt-4 text-center text-sm pb-5">
          Copyright {new Date().getFullYear()} ©{" "}
          <a href="https://prebuiltui.com" className="underline">PrebuiltUI</a>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
