import React from "react";
type Base = {
  id: number;
  title: string;
  model: number;
};

type optionType<T> = {
  values: T[];
  onChange: (value: T) => void;
};

const Selecte = <T extends Base>({
  values,
  onChange,
}: optionType<T>) => {
  const onSelectChange = (e: any) => {
    const val = values.find((value) => value.id === e.target.value);
    if (val) onChange(val);
  };
  return (
    <>
      <select onChange={onSelectChange}>
        {values.map((value) => (
          <option key={value.id} value={value.id}>
            {value.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default Selecte;
