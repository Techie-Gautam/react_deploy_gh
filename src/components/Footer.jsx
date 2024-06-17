import React from "react";

function Footer() {
  const today = new Date()
  return(
    <footer className="fixed  max-w-[700px] bottom-0 bg-blue-500 p-2 text-xl w-full text-center">
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer;
