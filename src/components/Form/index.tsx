import React, { useRef, useState, useEffect } from "react";

const initialvalue = {
  email: "",
  password: "",
};

type formtype = {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [data, setData] = useState(initialvalue);
  const [user, setUser] = useState<any[]>([]);

  useEffect(() => {
    console.log("data :", 
    
    
    );
  });

  const handleChnage = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const btnhandler = () => {
    setUser((user) => {
      return [...user, data];
    });
  };
  return (
    <form
      ref={formRef}
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
      }}
    >
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChnage}
            value={data.email}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChnage}
            value={data.password}
          />
        </label>
      </div>
      <div>
        <button
          type="button"
          value="Log in"
          onClick={() => {
            btnhandler();
          }}
        >
          Add data
        </button>
      </div>
    </form>
  );
};

export default Form;
