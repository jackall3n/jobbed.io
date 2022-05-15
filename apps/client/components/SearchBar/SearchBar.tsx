import React from 'react';
import classnames from 'classnames';
import { SearchIcon } from "@heroicons/react/outline";
import { Field, Form, Formik } from 'formik';
import { useRouter } from "next/router";

interface Props {
  className?: string;
}

function SearchBar({ className }: Props) {
  const router = useRouter();

  async function onSubmit(values: any) {
    await router.push({
        pathname: '/search',
        query: {
          ...values
        }
      }
    )
  }

  return (
    <div className={classnames("container max-w-[750px] mx-auto", className)}>
      <Formik initialValues={{ keyword: '', location: '' }} onSubmit={onSubmit}>
        <Form className="flex flex-col shadow-md md:flex-row bg-white p-0 md:p-2 mx-5 md:mx-0 rounded-xl">
          <div className="flex-1 flex py-0 flex-col md:flex-row">
            <label className="flex-1 flex items-center justify-center mx-3 my-5 md:my-0 md:mx-0">
              <SearchIcon className="ml-3 w-5 h-5 text-gray-400 hidden md:block" />
              <Field name="keyword" className="flex-1 outline-0 py-0 px-1 md:py-2 md:px-3 text-sm font-normal"
                     placeholder="Search keywords, jobs, companies" />
            </label>
            <label className="flex-1 flex items-center justify-center border-l-0 md:border-l border-t md:border-t-0">
              <Field name="location"
                     className="flex-1 outline-0 mx-3 my-5 md:my-0 md:py-2 px-1 md:px-3 text-sm font-normal"
                     placeholder="Enter your locations" />
            </label>

          </div>
          <button
            className="m-3 mt-0 md:m-0 px-10 h-12 flex items-center justify-center font-normal bg-purple-500 transition-colors hover:bg-purple-600 text-sm rounded-lg md:min-w-auto text-white"
            placeholder="e.g. Brighton, London">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default SearchBar;
