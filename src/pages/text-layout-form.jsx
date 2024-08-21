import React from "react";
import "../App.css";
import Button from "../components/button";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const TestLayoutForm = () => {
  return (
    <div className="py-5 px-5 xl:px-52">
      <div className="flex flex-col xl:flex-row gap-x-5 gap-y-5">
        <section className="flex justify-between items-center mb-5 xl:w-[35%]">
          <Button className="flex justify-center items-center gap-1 w-[100px] h-[50px] rounded-lg font-semibold text-white bg-black">
            <IoMdAdd style={{ fontSize: "20px" }} />
            Tambah
          </Button>

          {/* hidden elemen ketikan tablet */}
          <Button className="flex justify-center items-center gap-1 md:hidden xl:flex w-[100px] h-[50px] rounded-lg bg-gray-300 font-semibold">
            <MdOutlineFileDownload style={{ fontSize: "20px" }} /> Import
          </Button>
          <Button className="flex justify-center items-center gap-1 md:hidden xl:flex w-[100px] h-[50px] rounded-lg bg-gray-300 font-semibold">
            <MdOutlineFileUpload style={{ fontSize: "20px" }} /> Export
          </Button>
          {/*  */}

          {/* hidden elemen ketika mobile dan desktop*/}
          <div className="hidden md:flex xl:hidden justify-between gap-5">
            <Button className="flex justify-center items-center gap-1 w-[100px] h-[50px] rounded-lg bg-gray-300 font-semibold">
              <MdOutlineFileDownload style={{ fontSize: "20px" }} /> Import
            </Button>
            <Button className="flex justify-center items-center gap-1 w-[100px] h-[50px] rounded-lg bg-gray-300 font-semibold">
              <MdOutlineFileUpload style={{ fontSize: "20px" }} /> Export
            </Button>
          </div>
          {/*  */}
        </section>
        <section className="w-full xl:w-[45%]">
          <input
            className="w-full h-[50px] border-2 outline-none px-3 rounded-lg"
            type="text"
            placeholder="Search"
          />
        </section>
        <section className="w-full xl:w-[20%]">
          <select
            className="w-full h-[50px] border-2 outline-none px-3 rounded-lg"
            name="tahun"
            id="tahun"
          >
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </section>
      </div>
    </div>
  );
};

export default TestLayoutForm;
