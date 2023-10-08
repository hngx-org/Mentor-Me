import React, { FormHTMLAttributes, LabelHTMLAttributes } from "react";
import SelectInputType from "../ui/SelectInputType";
import Button from "@/components/ui/Button";

type SessionFormProps = {
  labelName?: string;
  selectLabels?: LabelHTMLAttributes<HTMLLabelElement>["htmlFor"];
  isRequired?: true;
  sessionType?: string;
  placeholder?: string;
};

function RecurringSessionForm({
  labelName,
  selectLabels,
  isRequired,
  sessionType,
  placeholder,
}: SessionFormProps) {
  return (
    <div className="p-0 sm:py-8 sm:px-10 mx-auto flex flex-col justify-center items-center my-auto ">
      <div className="bg-[#fafafa] min-w-[100%] px-3 sm:min-w-[70%] md:min-w-[60%] py-4 rounded">
        <div className=" w-[100%] sm:px-8 md:px-12 flex flex-col gap-3 py-3">
          <h1 className="text-left font-bold text-[1.5rem] sm:text-[2rem] text-[#08051e]">
            Create a Free Session
          </h1>
          <p className="text-gray-500">Create a session that best suits you!</p>
        </div>
        <form className="flex flex-col gap-3 sm:gap-6 py-3 rounded sm:px-12 w-full justify-between">
          <SelectInputType
            labelText="Session name"
            isRequired={true}
            selectId="session-name"
            selectName="session-name"
            placeholder="Give this session a name"
          />
          <SelectInputType
            labelText="Description"
            isRequired={true}
            selectId="Description"
            selectName="Description"
            placeholder="Tell us a little about this session"
          />
          <SelectInputType
            labelText="Session type"
            isRequired={true}
            selectId="session-type"
            selectName="session-type"
            placeholder="Select from the options"
          />
          <SelectInputType
            labelText="Number of session"
            isRequired={true}
            selectId="number-of-session"
            selectName="number-of-session"
            placeholder="Select..."
          />
          <SelectInputType
            labelText="Occurrence"
            isRequired={true}
            selectId="occurrence"
            selectName="occurrence"
            placeholder="How often will you like to have this session"
          />
          <SelectInputType
            labelText="Select relevant topics"
            isRequired={true}
            selectId="topics"
            selectName="topics"
            placeholder="Select some relevant topics this session"
          />
          <div>
            <input type="checkbox" />
            <span className="px-2 text-gray-400">
              Allow mentees to select this instead
            </span>
          </div>
          <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center w-full md:pt-8 py-2">
            <Button
              className="p-4 w-full md:w-[20%]"
              variant="secondary"
              type="button"
              title="Cancel"
            />
            <Button
              className="p-4 w-full md:w-[20%]"
              variant="primary"
              type="button"
              title="Continue"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default RecurringSessionForm;
