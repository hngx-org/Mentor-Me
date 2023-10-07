export default function MentorProgressBar(props: any) {
    const arr = [0, 1, 2, 3, 4];
    return (
      <div>
        {/* container for progress bar bubbles */}
        <div className="w-full flex justify-start gap-2">
          {arr.map((bubble, idx) => {
            return (
              <div
                key={idx}
                className={`${
                  bubble < props.currForm + 1 ? "bg-Accent1" : "bg-[#eee]"
                } ${
                  bubble == props.currForm
                    ? "border-Accent1 border-[1px] bg-[#eee]"
                    : ""
                } h-[7px] max-w-[120px] w-[100%] rounded duration-[0.5s]`}
              ></div>
            );
          })}
        </div>
        {/* container for steps */}
        <div className="mt-4 font-Hanken">
          <p>Step {props.currForm + 1} of 5</p>
        </div>
      </div>
    );
  }
  