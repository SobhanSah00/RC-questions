

export const CustomSuccessToast = () => (
  <div className="flex items-center p-4 rounded-lg bg-green-500 text-white">
    <span className="mr-2 text-xl">✔️</span>
    <span className="text-lg">Success!</span>
  </div>
);

export const CustomErrorToast = () => (
  <div className="flex items-center p-4 rounded-lg bg-red-500 text-white">
    <span className="mr-2 text-xl">❌</span>
    <span className="text-lg">Error!</span>
  </div>
);
