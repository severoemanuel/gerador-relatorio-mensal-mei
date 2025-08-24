import { previewDataDto } from "~/helpers";

interface Props {
  children?: React.ReactNode;
  params: any;
}

export const PreviewInfo: React.FC<Props> = ({ params }) => {
  const today = new Date().toLocaleString("pt-BR").slice(0, -10);
  const data = previewDataDto(params);

  return (
    <div
      className="border-2 border-gray-900 w-[850px] font-semibold mx-auto"
      id="preview-info"
    >
      <div className="pdf-title">RELATÓRIO MENSAL DAS RECEITAS BRUTAS</div>
      <div className="pdf-item">CNPJ: {data?.cnpj}</div>
      <div className="pdf-item">
        Empreendedor individual: {data?.razaoSocial}
      </div>
      <div className="pdf-item">
        Período de apuração: {data?.periodoApuracao}
      </div>

      <div className="pdf-title !text-left">
        RECEITA BRUTA MENSAL – REVENDA DE MERCADORIAS (COMÉRCIO)
      </div>

      <div className="pdf-double-item">
        <div>
          I – Revenda de mercadorias com dispensa de emissão de documento fiscal
        </div>
        <div>R$ {data?.comercioSemNF}</div>
      </div>

      <div className="pdf-double-item">
        <div>II – Revenda de mercadorias com documento fiscal emitido</div>
        <div>R$ {data?.comercioComNF}</div>
      </div>

      <div className="pdf-double-item">
        <div>III – Total das receitas com revenda de mercadorias (I + II)</div>
        <div>R$ {data?.comercioTotal}</div>
      </div>

      <div className="pdf-title">
        RECEITA BRUTA MENSAL – VENDA DE PRODUTOS INDUSTRIALIZADOS (INDÚSTRIA)
      </div>

      <div className="pdf-double-item">
        <div>
          IV – Venda de produtos industrializados com dispensa de emissão de
          documento fiscal
        </div>
        <div>R$ {data?.industriaSemNF}</div>
      </div>

      <div className="pdf-double-item">
        <div>
          V – Venda de produtos industrializados com documento fiscal emitido
        </div>
        <div>R$ {data?.industriaComNF}</div>
      </div>

      <div className="pdf-double-item">
        <div>
          VI – Total das receitas com venda de produtos industrializados (IV +
          V)
        </div>
        <div>R$ {data?.industriaTotal}</div>
      </div>

      <div className="pdf-title">
        RECEITA BRUTA MENSAL – PRESTAÇÃO DE SERVIÇOS
      </div>

      <div className="pdf-double-item">
        <div>
          VII – Receita com prestação de serviços com dispensa de emissão de
          documento fiscal
        </div>
        <div>R$ {data?.servicosSemNF}</div>
      </div>

      <div className="pdf-double-item">
        <div>
          VIII – Receita com prestação de serviços com documento fiscal emitido
        </div>
        <div>R$ {data?.servicosComNF}</div>
      </div>

      <div className="pdf-double-item">
        <div>
          IX – Total das receitas com prestação de serviços (VII + VIII)
        </div>
        <div>R$ {data?.servicosTotal}</div>
      </div>

      <div className="pdf-double-item">
        <div>X - Total geral das receitas brutas no mês (III + VI + IX)</div>
        <div>R$ {data?.total}</div>
      </div>

      <div className="pdf-double-item ">
        <div className="items-center flex">
          LOCAL E DATA: {`${data?.local} ${today}`}
        </div>
        <div>
          ASSINATURA DO EMPRESÁRIO:
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="pdf-item">
        <span className="block pb-2">
          ENCONTRAM-SE ANEXADOS A ESTE RELATÓRIO:
        </span>
        <span className="block">
          - Os documentos fiscais comprobatórios das entradas de mercadorias e
          serviços tomados referentes ao período;
        </span>
        <span className="block">
          - As notas fiscais relativas às operações ou prestações realizadas
          eventualmente emitidas
        </span>
      </div>
    </div>
  );
};
