export default function FormularioVisitante() {
  return (
    <>
      <form
        action=""
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
            id="nome"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="cpf">CPF</label>
          <input
            className="px-2 py-3 rounded-md border border-[#ddd]"
            type="number"
            name="cpf"
            id="cpf"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="profissao">Profissão</label>
          <input
            className="px-2 py-3 rounded-md border border-[#ddd]"
            type="text"
            name="profissao"
            id="profissao"
          />
        </div>
        <div className="w-full flex justify-between gap-5">
          <div className="w-1/2 flex flex-col">
            <label htmlFor="genero">Gênero</label>
            <select
              className="px-2 py-3 rounded-md border border-[#ddd]"
              name="genero"
              id="genero"
            >
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
          <div className="w-1/2 flex flex-col">
            <label htmlFor="idade">Idade</label>
            <input
              className="px-2 py-3 rounded-md border border-[#ddd]"
              type="number"
              name="idade"
              id="idade"
            />
          </div>
        </div>
        <div className="w-full flex justify-between gap-5">
          <div className="w-1/2 flex flex-col">
            <label htmlFor="cidade">Cidade</label>
            <select
              className="px-2 py-3 rounded-md border border-[#ddd]"
              name="cidade"
              id="cidade"
            >
              <option value="fortaleza">Fortaleza</option>
            </select>
          </div>
          <div className="w-1/2 flex flex-col">
            <label htmlFor="bairro">Bairro</label>
            <select
              className="px-2 py-3 rounded-md border border-[#ddd]"
              name="bairro"
              id="bairro"
            >
              <option value="aldeota">Aldeota</option>
            </select>
          </div>
        </div>
        <input
          className="w-full p-3 mt-4 rounded-md border cursor-pointer bg-[#e3e7e8]"
          type="button"
          value="Enviar"
        />
      </form>
    </>
  );
}
