import React from "react";
import { InputComponent, ButtonComponent } from "../Components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputFields from "./InputFields";
import { useMutation } from "@tanstack/react-query";

const ContactComponent = () => {
  const { mutate, reset } = useMutation({
    mutationFn: async (datas) => {
      const res = axios.post("http://localhost:2081/api/v1/contact", datas, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success("Submitted successfully");
      reset();
    },
    onError: (err) => {
      toast.error(err.message ?? "Submission failed");
      reset();
    },
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()];
    const isEmpty = values.includes("");
    if (isEmpty) {
      toast.error("please provides all the values");
      return;
    }
    const datas = Object.fromEntries(formData);
    mutate(datas);
  };

  return (
    <>
      <ToastContainer position="top-center" theme="colored" />
      <div className="w-full bg-[#bfc0c0] py-10">
        <div className="max-w-[600px] md:max-h-[600px] mx-auto px-2 rounded-lg">
          <div>
            <form onSubmit={onSubmit}>
              <div className=" py-10 drop-shadow-lg bg-gray-500 rounded-lg px-2">
                <h3 className="text-4xl font-poppins text-white">Get In Touch</h3>
                <p className="font-poppins text-white py-2">
                  Let's have a opportunity to serve in a better way.
                </p>

                <div className="grid md:grid-cols-2 gap-2">
                  {InputFields.map((inputs) => (
                    <InputComponent data={inputs} key={inputs.name} />
                  ))}
                </div>
                <div className="">
                <ButtonComponent
                  title={"submit"}
                  backgroundColor={"bg-blue-400"}
                  btnSize={"w-full"}
                />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
