import { toast } from "react-toastify";

interface SubmitObject {
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function submit(obj: SubmitObject) {
  try {
    await fetch("https://formsubmit.co/ajax/c715ae7b89f023560221cc3628ab9d9b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(obj),
    });
    toast.success("Mensagem enviada com sucesso!");
  } catch {
    toast.error("Erro ao enviar a mensagem");
  }
}

export default submit