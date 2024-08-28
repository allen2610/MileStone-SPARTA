
export default function MeditationLayout ({ children }) {
  return (
    <>
      <div className="flex justify-center w-full h-200 items-center">
        <div className="bg-white text-black w-100 rounded-xl m-3 p-[60px]">
        { children }
        </div>
      </div>
    </>
  );
}
