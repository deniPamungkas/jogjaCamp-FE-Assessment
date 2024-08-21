import React, { useEffect, useRef, useState } from "react";
import Card from "../components/card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TestSelect = () => {
  //ref input
  const provRef = useRef();
  const kabRef = useRef();
  const kecRef = useRef();

  //state untuk menyimpan nama wilayah
  const [formData, setFormData] = useState(
    JSON.parse(window.sessionStorage.getItem("form")) || {
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      desa: "",
    }
  );

  //state untuk menyimpan id wilayah
  const [formDataId, setFormDataId] = useState(
    JSON.parse(window.sessionStorage.getItem("formId")) || {
      provinsi: "",
      kabupaten: "",
      kecamatan: "",
      desa: "",
    }
  );

  const provinsi = useQuery({
    queryKey: ["getProvinsiOpt"],
    queryFn: async () => {
      try {
        const result = await axios.get(
          "http://apikab.jcamp.pt/public/api/v1/reference/provinces"
        );
        return result.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });

  const kabupaten = useQuery({
    queryKey: ["getKabupatenOpt"],
    queryFn: async () => {
      try {
        const result = await axios.get(
          "http://apikab.jcamp.pt/public/api/v1/reference/regencies_of/" +
            formDataId.provinsi
        );
        return result.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });

  const kecamatan = useQuery({
    queryKey: ["getKecamatanOpt"],
    queryFn: async () => {
      try {
        const result = await axios.get(
          "http://apikab.jcamp.pt/public/api/v1/reference/districts_of/" +
            formDataId.kabupaten
        );
        return result.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });

  const desa = useQuery({
    queryKey: ["getDesaOpt"],
    queryFn: async () => {
      try {
        const result = await axios.get(
          "http://apikab.jcamp.pt/public/api/v1/reference/villages_of/" +
            formDataId.kecamatan
        );
        return result.data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "provinsi") {
      setFormDataId({
        ...formDataId,
        [e.target.name]:
          provRef.current.options[provRef.current.selectedIndex].id,
      });
    }
    if (e.target.name === "kabupaten") {
      setFormDataId({
        ...formDataId,
        [e.target.name]:
          kabRef.current.options[kabRef.current.selectedIndex].id,
      });
    }
    if (e.target.name === "kecamatan") {
      setFormDataId({
        ...formDataId,
        [e.target.name]:
          kecRef.current.options[kecRef.current.selectedIndex].id,
      });
    }
  };

  //hooks useEffect untuk menyimpan state formData dan formDataId pada sessionStorage saat dependencies formData/formDataId valuenya ada yang berubah
  useEffect(() => {
    const setToSession = () => {
      window.sessionStorage.setItem("form", JSON.stringify(formData));
      window.sessionStorage.setItem("formId", JSON.stringify(formDataId));
    };
    setToSession();

    //refecth useQuery() saat dependencies formData/formDataId valuenya ada yang berubah
    kabupaten.refetch();
    kecamatan.refetch();
    desa.refetch();
    //////////////////
  }, [formData, formDataId]);

  return (
    <div className="w-full flex gap-x-5 py-5 px-5 xl:px-52">
      <section className="w-[300px] h-fit bg-gray-300 rounded-lg p-5">
        <h1 className="font-semibold text-2xl">Filter</h1>
        <form className="flex flex-col gap-y-5 mt-6" action="">
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold" htmlFor="provinsi">
              Provinsi
            </label>
            <select
              ref={provRef}
              onChange={handleChange}
              className="h-[40px] rounded-lg px-3 outline-none"
              name="provinsi"
              id="provinsi"
              value={formData.provinsi !== "" ? formData.provinsi : null}
            >
              {provinsi.isLoading === false &&
                provinsi.data.map((data) => {
                  return (
                    <option key={data.name} id={data.id} value={data.name}>
                      {data.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold" htmlFor="kabupaten">
              Kabupaten
            </label>
            <select
              ref={kabRef}
              onChange={handleChange}
              className="h-[40px] rounded-lg px-3 outline-none"
              name="kabupaten"
              id="kabupaten"
            >
              {kabupaten.isLoading === false &&
                kabupaten?.data?.map((data) => {
                  return (
                    <option key={data.name} id={data.id} value={data.name}>
                      {data.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold" htmlFor="kecamatan">
              Kecamatan
            </label>
            <select
              ref={kecRef}
              onChange={handleChange}
              className="h-[40px] rounded-lg px-3 outline-none"
              name="kecamatan"
              id="kecamatan"
            >
              {kecamatan.isLoading === false &&
                kecamatan?.data?.map((data) => {
                  return (
                    <option key={data.name} id={data.id} value={data.name}>
                      {data.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold" htmlFor="desa">
              Desa
            </label>
            <select
              onChange={handleChange}
              className="h-[40px] rounded-lg px-3 outline-none"
              name="desa"
              id="desa"
            >
              {desa.isLoading === false &&
                desa?.data?.map((data) => {
                  return (
                    <option key={data.name} id={data.id} value={data.name}>
                      {data.name}
                    </option>
                  );
                })}{" "}
            </select>
          </div>
        </form>
      </section>
      <section className="w-full grid grid-cols-1 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default TestSelect;
