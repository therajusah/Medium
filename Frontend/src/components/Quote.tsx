const Quote = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-slate-300">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-3xl font-bold text-left">
            "The customer service I received was exceptional. The support team
            went above and beyond to address my concerns."
          </div>
          <div className="max-w-sm mt-4 text-xl font-semibold">
            Jules Winfield
          </div>
          <div className="max-w-md text-sm font-semibold text-slate-500">
            CEO | Ame Inc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
