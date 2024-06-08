import React from "react";

const InputComponent = ({ data }) => {
  const { type, placeholder, label, name, id, htmlFor, onChange, value, } = data;
  return (
    <>
      <div className="relative mb-4">
        <input
          type={type}
          name={name}
          id={id}
          autoComplete="off"
          placeholder={placeholder}
          className="peer w-full h-16 
                                 focus:outline-none border-2
                                 border-gray-300
                                  px-2 rounded-lg 
                                    hover:border-gray-400
                                    
                                     placeholder-transparent
                                      font-poppins
                                     dark:border-gray-600
                                     dark:hover:border-gray-400
                                     focus:dark:border-white
                                     dark:bg-black
                                     dark:text-white
                                     bg-slate-100
                                     "
          value={value}
          onChange={onChange}
          required
        />
        <label
          htmlFor={htmlFor}
          className="absolute left-2 top-1 text-sm text-gray-400 
                                 peer-placeholder-shown:text-base
                                  peer-placeholder-shown:top-4
                                   peer-placeholder-shown:text-gray-600
                                   dark:peer-placeholder-shown:text-gray-200
                                   peer-focus:top-1
                                   peer-focus:text-sm
                                   peer-focus:text-gray-400
                                   transition-all duration-200 ease-in-out
                                  
                                   font-poppins"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default InputComponent;
