export default function LoginForm() {
  return (
    <>
      <form
        action=""
        className="w-4/5 md:w-3/5 lg:w-5/12 xl:w-1/3 px-5 py-6 flex flex-col items-start justify-center gap-2 rounded-lg shadow-lg bg-white"
      >
        <h2 className="w-full mb-3 text-center text-xl font-semibold uppercase">
          Login
        </h2>
        <div className="w-full flex flex-col">
          <label htmlFor="usuario">Usuário</label>
          <input
            className="px-2 py-3 rounded-md border border-[#ddd]"
            type="text"
            name="usuario"
            id="usuario"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="senha">Senha</label>
          <input
            className="px-2 py-3 rounded-md border border-[#ddd]"
            type="password"
            name="senha"
            id="senha"
          />
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
