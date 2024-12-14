import React, { useState } from "react";

const FormSection = () => {
  const [form, setForm] = useState({
    contractValue: "",
    claimValue: "",
    place: "",
    language: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-section p-5 bg-gray-50 flex-grow">
      <h2 className="text-xl font-bold mb-4">File your Claim</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Contract Value</label>
          <input
            type="text"
            name="contractValue"
            value={form.contractValue}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Claim Value</label>
          <input
            type="text"
            name="claimValue"
            value={form.claimValue}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Place</label>
          <input
            type="text"
            name="place"
            value={form.place}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Language</label>
          <input
            type="text"
            name="language"
            value={form.language}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      <div className="mt-4">
        <label>Statement</label>
        <textarea className="w-full p-2 border rounded" rows="4" />
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="p-2 bg-blue-500 text-white rounded">Submit</button>
        <button className="p-2 bg-gray-300 rounded">Cancel</button>
      </div>
    </div>
  );
};

export default FormSection;
