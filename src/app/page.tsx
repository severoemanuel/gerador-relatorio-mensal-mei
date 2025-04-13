"use client";

import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Field } from "~/components/form/Field";
import { Form } from "~/components/form/Form";
import { PreviewFormData, previewSchema } from "./helper";
import { yupResolver } from "@hookform/resolvers/yup";
import { previewFormDto } from "~/helpers";

export default function Home() {
  const methods = useForm<PreviewFormData>({
    resolver: yupResolver(previewSchema as any, { abortEarly: false }),
  });

  const onSubmit = useCallback((formData: PreviewFormData) => {
    const query = new URLSearchParams(
      previewFormDto(formData) as any
    ).toString();

    const page = window.open(`/preview?${query}`, "_blank");
    if (!page) return;

    page.window.onafterprint = () => page?.close();
    setTimeout(() => {
      page?.window.print();
    }, 500);
  }, []);

  return (
    <main className="flex h-full justify-center flex-wrap items-start bg-gray-800 overflow-auto">
      <h1 className="text-2xl border-3 text-white w-full self-start pt-20 text-center">
        Preencha o formulário para o preenchimento do relatório mensal do MEI
      </h1>

      <div className="h-full w-full max-w-[600px] max-sm:px-4">
        <Form methods={methods} onSubmit={onSubmit}>
          <Field
            name="cnpj"
            mask="cnpj"
            label="CNPJ"
            placeholder="Digite aqui seu CNPJ"
          />

          <Field
            name="razaoSocial"
            label="Empreendedor individual (razão social)"
            placeholder="Digite aqui sua razão social"
          />

          <Field
            name="periodoApuracao"
            label="Período de apuração"
            placeholder="Digite aqui o período de apuração (ex: JANEIRO/2024)"
          />

          <Field
            name="local"
            label="Localização"
            placeholder="Digite aqui a localização"
          />

          <div className="pt-4 form-group">
            <div className="w-full">
              <h2 className="text-white">
                RECEITA BRUTA MENSAL – REVENDA DE MERCADORIAS (COMÉRCIO)
              </h2>
            </div>
            <div className="flex-1">
              <Field
                number
                name="comercioComNF"
                label="Sem emissão de documento fiscal"
              />
            </div>
            <div className="flex-1">
              <Field
                number
                name="comercioSemNF"
                label="Com documento fiscal emitido"
              />
            </div>
          </div>

          <div className="pt-4 form-group">
            <div className="w-full">
              <h2 className="text-white">
                RECEITA BRUTA MENSAL – VENDA DE PRODUTOS INDUSTRIALIZADOS
                (INDÚSTRIA)
              </h2>
            </div>
            <div className="flex-1">
              <Field
                number
                name="industriaComNF"
                label="Sem emissão de documento fiscal"
              />
            </div>
            <div className="flex-1">
              <Field
                number
                name="industriaSemNF"
                label="Com documento fiscal emitido"
              />
            </div>
          </div>

          <div className="pt-4 form-group">
            <div className="w-full">
              <h2 className="text-white">
                RECEITA BRUTA MENSAL – PRESTAÇÃO DE SERVIÇOS
              </h2>
            </div>
            <div className="flex-1">
              <Field
                number
                name="servicosComNF"
                label="Sem emissão de documento fiscal"
              />
            </div>
            <div className="flex-1">
              <Field
                number
                name="servicosSemNF"
                label="Com documento fiscal emitido"
              />
            </div>
          </div>

          <div className="pt-6 flex justify-end items-center">
            <button type="submit" className="btn w-full lg:w-auto">Enviar</button>
          </div>
        </Form>
      </div>
    </main>
  );
}
