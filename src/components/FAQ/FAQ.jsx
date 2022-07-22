//Dependencies
import React from "react";

//Components
import Answers from "./Answers";

const FAQ = () => {
  return (
    <div className="faq">
      <Answers
        title="¿Cuáles son los pasos para tomar una decisión?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit natus doloribus provident nam commodi illo perspiciatis cum amet quisquam dolores harum?"
      />
      <Answers
        title="¿Cuáles son los pasitos para tomar una decisión?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit natus doloribus provident nam commodi illo perspiciatis cum amet quisquam dolores harum?"
      />
      <Answers
        title="¿Cuáles son los pasotes para tomar una decisión?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit natus doloribus provident nam commodi illo perspiciatis cum amet quisquam dolores harum?"
      />
    </div>
  );
};

export default FAQ;
