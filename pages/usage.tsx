import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Formly, type IField } from "react-formly-light";

const classField =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
const classButton =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto md:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

const Usage: NextPage = () => {
  // * Declare form.
  const form_name = "formly_fetch_data";
  const _fields: IField[] = [
    {
      type: "input",
      name: "firstname",
      attributes: {
        id: "firstname",
        placeholder: "First name",
        autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      prefix: {
        tag: "div",
        classes: ["mb-6"],
      },
    },
    {
      type: "input",
      name: "lastname",
      attributes: {
        id: "lastname",
        placeholder: "Last name",
        autocomplete: "off",
        autocorrect: "off",
        classes: [classField],
      },
      prefix: {
        tag: "div",
        classes: ["mb-6"],
      },
    },
  ];

  // * Hooks.
  const [fields, setFields] = useState<IField[]>(_fields);

  useEffect(() => {
    setFields(_fields);
  });

  // *
  const onSubmit = (data: any) => {
    console.log("onSubmit", data);
  };

  return (
    <div className="w-1/2 mx-auto mt-10">
      <h1 className="text-6xl italic text-indigo-600 mb-10">Usage</h1>
      <div className="p-8 drop-shadow-lg border border-transparent text-base font-medium rounded-lg text-indigo-700 bg-gray-800 hover:bg-gray-900 md:text-lg">
        <Formly
          fields={fields}
          form_name={form_name}
          onSubmit={onSubmit}
          btnSubmit={{
            // text: "Send",
            classes: classButton,
            prefix: {
              tag: "div",
              // classes: ["mt-6"],
            },
          }}
          btnReset={{
            // text: "Cancel",
            classes: classButton,
            prefix: {
              tag: "div",
              // classes: ["mt-6"],
            },
          }}
          buttonsAction={{
            tag: "div",
            classes: ["flex flex-row gap-2"],
          }}
        />
      </div>
    </div>
  );
};

export default Usage;
