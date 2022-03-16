import React from "react";

import { Input } from "antd";

function TextField({ text, placeholder, prefix }) {
  return (
    <Input
      type="text"
      value={text}
      className="rounded-lg items-center p-1 justify-start flex"
      style={{ width: "60%" }}
      size="large"
      placeholder={placeholder}
      prefix={prefix}
    />
  );
}

export default TextField;
