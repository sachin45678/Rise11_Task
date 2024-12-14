import React from "react";

const Header = () => {
  return (
    <div className="header bg-white p-5 shadow-md">
      <div className="progress-bar flex items-center space-x-4">
        {["Preliminary", "Your Details", "KYC", "Parties", "Claim", "Review", "Payment"].map((step, index) => (
          <div key={index} className="step flex items-center">
            <div className={`circle w-6 h-6 rounded-full ${index < 3 ? "bg-blue-500" : "bg-gray-300"}`} />
            <span className="ml-2">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
