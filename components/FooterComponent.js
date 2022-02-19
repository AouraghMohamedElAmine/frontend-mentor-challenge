import React from "react";

function FooterComponent() {
  return (
    <footer className=" text-center bg-darkBlue  lg:flex lg:px-20   justify-evenly lg:text-left  ">
      <div className="font-bold text-white py-6 lg:py-0 lg:my-7 text-3xl ">Shortly</div>
      <div>
        <ul className="text-gray my-4">
          <li className="text-white font-semibold py-3">Features</li>
          <li className="py-1">Link Shortening</li>
          <li className="py-1">Branded Links</li>
          <li className="py-1">Analytics</li>
        </ul>
      </div>
      <div>
        <ul className="text-gray my-4">
          <li className="text-white font-semibold py-3">Resources</li>
          <li className="py-1">Blog</li>
          <li className="py-1">Developers</li>
          <li className="py-1">Support</li>
        </ul>
      </div>
      <div>
        <ul className="text-gray my-4">
          <li className="text-white font-semibold py-3">Company</li>
          <li className="py-1">About</li>
          <li className="py-1">Our Team</li>
          <li className="py-1">Careers</li>
          <li className="py-1">Contact</li>
        </ul>
      </div>
      <div>
        <div className="text-white py-4 lg:py-0 lg:my-7">
          <a className="  text-2xl mx-2 fab fa-linkedin"></a>
          <a className="  text-2xl mx-2 fab fa-facebook"></a>
          <a className="  text-2xl mx-2 fab fa-google"></a>
          <a className="  text-2xl mx-2 fab fa-instagram"></a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
