import { useState } from "react";
import { API } from "../services";

export default function LoginForm() {
  const [inputs, setInputs] = useState({});
  const [response, setResponse] = useState();

  // função para guardar os valores dos inputs em formato chave-valor
  const updateInputs = (event) => {
    const field = event.target.id;
    const value = event.target.value;
    const temp = {};
    temp[field] = value;
    setInputs({ ...inputs, ...temp });
    console.log(updateInputs);
  };

  // função executada ao submeter o formulário
  const submitForm = async (event) => {
    event.preventDefault();
    const result = await API.post("login", inputs);
    setResponse(result.data);
  };

  return (
    <>
      <div>{response}</div>
      <form
        onSubmit={submitForm}
        className="w-4/5 md:w-3/5 lg:w-5/12 xl:w-1/3 px-5 py-6 flex flex-col items-start justify-center gap-2 rounded-lg shadow-lg bg-white"
      >
        <h2 className="w-full mb-3 text-center text-xl font-semibold uppercase">
          Login
        </h2>
        <div className="w-full flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="px-2 py-3 rounded-md border border-[#ddd]"
            type="text"
            name="email"
            id="usuario_email"
            required
            onChange={updateInputs}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="senha">Senha</label>
          <input
            className="px-2 py-3 rounded-md border border-[#ddd]"
            type="password"
            name="senha"
            id="usuario_senha"
            required
            onChange={updateInputs}
          />
        </div>
        <input
          className="w-full p-3 mt-4 rounded-md border cursor-pointer bg-[#e3e7e8]"
          type="submit"
          value="Enviar"
        />
      </form>
    </>
  );
}
