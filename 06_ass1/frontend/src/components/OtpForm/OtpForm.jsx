import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from 'react-hot-toast';
// import { CustomSuccessToast, CustomErrorToast } from "./CustomToast";

function OtpForm({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const [otpStatus, setOtpStatus] = useState(null);
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;
    const value = e.target.value;
    const copyOtpFields = [...otpFields];

    if (key === "ArrowRight") {
      if (index + 1 < otpLength) 
        ref.current[index + 1].focus();
      return;
    }

    if (key === "ArrowLeft") {
      if (index - 1 >= 0) 
        ref.current[index - 1].focus();
      return;
    }

    if (key === "Backspace") {
      copyOtpFields[index] = "";
      if (index - 1 >= 0) ref.current[index - 1].focus();
      setOtpFields(copyOtpFields);
      return;
    }

    if (!isNaN(key) && key !== " ") {
      copyOtpFields[index] = key;
      if (index + 1 < otpLength) ref.current[index + 1].focus();
      setOtpFields(copyOtpFields);
    }
  };

  const handleClick = () => {
    const number = parseInt(otpFields.join(""), 10);
    const hardcodedOtp = 1234;

    if (number === hardcodedOtp) {
      // toast.custom(<CustomSuccessToast />, { duration: 2000 });
      toast.success(`OTP ${number} is correct`);
      setOtpStatus("success");
    } else {
      // toast.custom(<CustomErrorToast />, { duration: 2000 });
      toast.error(`Invalid OTP ${number}, please try again`);
      setOtpStatus("failed");
    }
  };

  useEffect(() => {
    ref.current[0].focus();
  }, []);

  return (
    <>
      <div className="bg-blue-500 min-h-screen">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white pt-10">
            Chai aur Code
          </h1>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="text-center bg-white p-8 rounded-lg shadow-lg">
            <div>
              <h2 className="text-2xl font-bold mb-2">Mobile Phone Verification</h2>
              {otpStatus == null && (
                <p className="mb-4 flex flex-col items-center text-gray-500">
                  Enter the 4-digit verification code that was sent to
                  <span className="text-center">your phone number.</span>
                </p>
              )}

              {otpStatus === "success" && (
                <p className="mb-4 flex flex-col items-center text-green-500">
                  OTP verified successfully.
                </p>
              )}

              {otpStatus === "failed" && (
                <p className="mb-4 flex flex-col items-center text-red-500">
                  OTP verification failed. Please try again.
                </p>
              )}

              <div className="flex justify-center mb-4 gap-2">
                {otpFields.map((value, index) => (
                  <input
                    key={index}
                    value={value}
                    ref={(currentInput) => (ref.current[index] = currentInput)}
                    type="text"
                    className={`w-12 h-12 border border-gray-400 rounded-md text-center focus:border-blue-100 text-gray-800 focus:outline-none ${
                      otpStatus === "success"
                        ? "border-green-500": otpStatus === "failed"? "border-red-500": "border-gray-400"} bg-blue-100`}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>
              <button
                onClick={handleClick}
                className={`${
                  otpStatus === "success"? "bg-green-500": otpStatus === "failed"? "bg-red-500": "bg-[#112D4E]" } text-white py-2 px-14 rounded`}
              >
                {otpStatus === "success"? "Verified": otpStatus === "failed"? "Verify Failed": "Get Verified"}
              </button>
              {otpStatus !== "success" && (
                <p className="mt-4">
                  <a href="" className="text-gray-500">
                    Didn&apos;t receive code?{" "}
                    <span className="text-[#112D4E]">Resend</span>
                  </a>
                </p>
              )}
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <a href="https://chaicode.com/" target="_blank">
              <img
                src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Et6vIZoTixOW93hRDSTMTP5zHiXBScPptDa7wio9Q19Fb3RVeyKyGSdMZNMc8b03m8cZ0ujW0IgAcOHc5a5pATb6wYlKbIcOCU3CVwOpaS5a40VH89QQ~eBtGj5qfiC9d6yfNL4gcOFGfWUKDtlz4flPXQaJAMOUP~rft27nkvk7Cbinif4IiEllm4khAfpzXqTNh48H8JOUsSgdQXBHIkL12OEZd~XdmNdfnl6lLF4M-69ZTRv7nip6jGr6zKiQ6qpV5P~BzFPPLDw0PZWjV~zQmnt8eRGvdRSuyjK9KlUjSNaNyVi8P2eeXixyUAJDCmEVW6CB6SozO0auNevxjQ__"
                alt="Icon"
                className="w-12 h-12"
              />
            </a>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default OtpForm;
