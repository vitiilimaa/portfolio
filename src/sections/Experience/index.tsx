import { TitleSection, Timeline } from "../../components";

const Experience = () => {
  const timeLineItems = [{
    title: "Jovem Aprendiz",
    company: "Balneário Bela Vista",
    startDate: "10/2018",
    endDate: "10/2020",
    description: "Atendimento ao público, organização de documentos em arquivos, serviços de controle financeiro do setor, recepção de usuários dos serviços da organização, controle de chaves e acessos, registrar informações."
  }, {
    title: "Recepcionista",
    company: "Balneário Bela Vista",
    startDate: "10/2020",
    endDate: "10/2022",
    description: "Atendimento ao público, organização de documentos em arquivos, serviços de controle financeiro do setor, recepção de usuários dos serviços da organização, controle de chaves e acessos, registrar informações."
  }, {
    title: "Estagiário",
    company: "AVMB - Soluções em TI",
    startDate: "03/2022",
    description: "Responsável pela manutenção e atualização de menus em portais, assegurando a navegabilidade eficiente e aprimorando a experiência do usuário."
  }]

  return (
    <section
      id="experience"
      className="row bg-yellow align-items-center justify-content-center pb-5"
    >
      <TitleSection containerStyle="mt-5" caption="Experiência" />
      <Timeline items={timeLineItems} />
    </section>
  );
};

export default Experience;
