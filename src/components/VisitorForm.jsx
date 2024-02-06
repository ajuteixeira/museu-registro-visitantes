import { useState } from "react";
import { API } from "../services";

export default function VisitorForm() {
  const [inputs, setInputs] = useState({});
  const [response, setResponse] = useState();

  // função para guardar os valores dos inputs em formato chave-valor
  const updateInputs = (event) => {
    const field = event.target.id;
    const value = event.target.value;
    const temp = {};
    temp[field] = value;
    setInputs({ ...inputs, ...temp });
  };

  // função executada ao submeter o formulário
  const submitForm = async (event) => {
    event.preventDefault();
    const result = await API.post("visitante", inputs);
    setResponse(result.data);
  };

  return (
    <>
      <div>{response}</div>
      <form
        onSubmit={submitForm}
        className="w-4/5 md:w-3/5 lg:w-5/12 xl:w-1/3 px-5 py-6 flex flex-col items-start justify-center gap-2 rounded-lg shadow-lg bg-white"
      >
        <h2 className="w-full mb-3 text-center text-xl font-semibold">
          Seja bem-vindo(a), visitante
        </h2>
        <div className="w-full flex flex-col">
          <label htmlFor="nome">Nome do visitante</label>
          <input
            className="px-2 py-3 rounded-md border border-[#ddd]"
            type="text"
            name="nome"
            id="visitante_nome"
            required
            onChange={updateInputs}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="cpf">CPF</label>
          <input
            className="px-2 py-3 rounded-md border border-[#ddd]"
            type="number"
            name="cpf"
            id="visitante_cpf"
            required
            onChange={updateInputs}
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="profissao">Profissão</label>
          <input
            className="px-2 py-3 rounded-md border border-[#ddd]"
            type="text"
            name="profissao"
            id="visitante_profissao"
            required
            onChange={updateInputs}
          />
        </div>
        <div className="w-full flex justify-between gap-5">
          <div className="w-1/2 flex flex-col">
            <label htmlFor="genero">Gênero</label>
            <select
              className="px-2 py-3 rounded-md border border-[#ddd]"
              name="genero"
              id="visitante_genero"
              required
              onChange={updateInputs}
            >
              <option value="" disabled></option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
            </select>
          </div>
          <div className="w-1/2 flex flex-col">
            <label htmlFor="idade">Idade</label>
            <input
              className="px-2 py-3 rounded-md border border-[#ddd]"
              type="number"
              name="idade"
              id="visitante_idade"
              required
              onChange={updateInputs}
            />
          </div>
        </div>
        <div className="w-full flex justify-between gap-5">
          <div className="w-1/2 flex flex-col">
            <label htmlFor="cidade">Cidade</label>
            <select
              className="px-2 py-3 rounded-md border border-[#ddd]"
              name="cidade"
              id="visitante_cidade"
              required
              onChange={updateInputs}
            >
              <option value="" disabled selected></option>
              <option value="Beberibe">Beberibe</option>
              <option value="Fortaleza">Fortaleza</option>
              <option value="Horizonte">Horizonte</option>
              <option value="Sobral">Sobral</option>
            </select>
          </div>
          <div className="w-1/2 flex flex-col">
            <label htmlFor="bairro">Bairro</label>
            <select
              className="px-2 py-3 rounded-md border border-[#ddd]"
              name="bairro"
              id="visitante_bairro"
              required
              onChange={updateInputs}
            >
              <option value="" disabled selected></option>
              <option value="Aerolândia">Aerolândia</option>
              <option value="Aldeota">Aldeota</option>
              <option value="Centro">Centro</option>
              <option value="Lagoa Redonda">Lagoa Redonda</option>
              <option value="Meireles">Meireles</option>
              <option value="Messejana">Messejana</option>
              <option value="Parquelândia">Parquelândia</option>
              <option value="Pedras">Pedras</option>
              <option value="Praia do Futuro">Praia do Futuro</option>
            </select>
          </div>
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
