"use client";
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast, Toaster } from "react-hot-toast";

interface FormData {
  email: string;
  pesan: string;
}

const Contact = () => {
  const [state, handleSubmit] = useForm("xeoevako");

  const [formData, setFormData] = useState<FormData>({
    email: "",
    pesan: "",
  });

  // Fungsi untuk menampilkan notifikasi saat berhasil
  const showSuccessNotification = () => {
    toast.success("Pesan Anda Terkirim!");
  };

  // Fungsi validasi nama harus lebih dari 3 karakter
  const isFormValid = (): boolean => {
    if (formData.email.length < 3) {
      toast.error("email harus lebih dari 3 karakter!");
      return false;
    }
    return true;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Mencegah halaman ter-refresh

    if (!isFormValid()) return;

    await handleSubmit(event);

    if (state.succeeded) {
      showSuccessNotification();
      setFormData({
        email: "",

        pesan: "",
      });
    }
  };
  useEffect(() => {
    if (state.succeeded) {
      showSuccessNotification(); // Menampilkan notifikasi jika pengiriman berhasil
      // Reset form setelah berhasil submit
      setFormData({
        email: "",

        pesan: "",
      });
    }
  }, [state.succeeded]);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="md:w-2/3  w-full max-h-full xl:block lg:hidden sm:block ">
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <div className="gap-[2rem] items-center  mx-auto ">
          <h2 className="text-black/70   font-semibold pb-2 text-lg pt-2">
            Kontak
          </h2>
          <div>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input
                value={formData.email}
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className="py-[0.7rem] w-full outline-none border border-gray-500 text-black   dark:bg-darkTua px-4 rounded-md"
                required
                onChange={handleInputChange}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <textarea
                value={formData.pesan}
                placeholder="Pesan"
                name="pesan"
                id="pesan"
                rows={4}
                className="py-[0.7rem] w-full outline-none border border-gray-500 text-black   dark:bg-darkTua px-4 rounded-md"
                required
                onChange={handleInputChange}
              ></textarea>
              <ValidationError
                prefix="pesan"
                field="pesan"
                errors={state.errors}
              />

              <div className="pb-3">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-4 w-36 py-2 bg-red-600 rounded-md text-center"
                >
                  <p className="font-semibold text-base text-white">
                    {state.submitting ? "Mengirim..." : "Kirim"}
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
