import React, { ChangeEvent, useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { FGInput } from "../Input/Input";
import { SelectProps } from "./types";
import { Option } from "../../models/common";

export const Select = ({
  onChange,
  options = [],
  value,
  placeholder,
}: SelectProps) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelected = (item: Option) => {
    setVisible(false);
    if (onChange) {
      onChange(item);
    }
    setSearch("");
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="formgen-select">
      <FGInput
        type="text"
        placeholder={placeholder}
        onChange={handleSearchChange}
        onInput={handleSearchChange}
        onKeyUp={handleSearchChange as any}
        onClick={(ev: any) => {
          ev.stopPropagation();
        }}
        onFocus={() => setVisible(true)}
        value={search || value?.label}
      >
        <Dropdown
          visible={visible}
          list={filteredOptions}
          onSelected={handleSelected}
          onClosed={() => setVisible(false)}
        />
      </FGInput>
    </div>
  );
};
