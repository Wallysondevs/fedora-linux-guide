import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Code, Settings, Package, Terminal, FileText, Zap } from "lucide-react";

  export default function Python() {
    return (
      <PageContainer
        title="Python no Fedora"
        subtitle="Configure o ambiente Python no Fedora: versões, pip, ambientes virtuais (venv), ferramentas de desenvolvimento e boas práticas."
        difficulty="intermediario"
        timeToRead="25 min"
      >
        <AlertBox type="info" title="Pré-requisitos">
            Ler o capítulo "Primeiros Passos" e ter Fedora instalado (workstation ou server).
          </AlertBox>
          <h2>Glossário rápido</h2>
          <ul>
            <li>
              <strong>{"python3"}</strong> {' — '} {"padrão no Fedora."}
            </li>
          <li>
              <strong>{"pip"}</strong> {' — '} {"gerenciador de pacotes Python."}
            </li>
          <li>
              <strong>{"venv"}</strong> {' — '} {"ambiente virtual isolado."}
            </li>
          <li>
              <strong>{"poetry/pipenv"}</strong> {' — '} {"alternativas modernas."}
            </li>
          <li>
              <strong>{"Module"}</strong> {' — '} {"dnf module list python."}
            </li>
          </ul>
          <h2><Code className="inline-block mr-2 mb-1 w-5 h-5" /> Python no Fedora</h2>
        <p>
          O Fedora é uma das melhores distros para desenvolvimento Python. Ele vem com Python 3
          pré-instalado (o sistema usa Python internamente), com versões sempre atualizadas.
          O Fedora é inclusive usado pela equipe do CPython (implementação padrão do Python) para testes.
        </p>

        <h2>Instalação e Versões</h2>
        <CodeBlock
          code={`# Ver versão instalada
  python3 --version

  # Instalar Python (já vem, mas pode atualizar)
  sudo dnf install python3

  # Instalar versão específica (múltiplas versões)
  sudo dnf install python3.11
  sudo dnf install python3.12

  # Instalar pip (gerenciador de pacotes Python)
  sudo dnf install python3-pip

  # Verificar pip
  pip3 --version

  # Instalar ferramentas de desenvolvimento
  sudo dnf install python3-devel python3-setuptools python3-wheel`}
          language="bash"
          title="instalação"
        />

        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> Ambientes Virtuais (venv)</h2>
        <p>
          <strong>Sempre use ambientes virtuais!</strong> Eles isolam as dependências de cada projeto,
          evitando conflitos entre versões de pacotes.
        </p>
        <CodeBlock
          code={`# Criar ambiente virtual
  python3 -m venv meu_projeto_venv
  # Cria uma pasta com Python isolado

  # Ativar o ambiente virtual
  source meu_projeto_venv/bin/activate
  # O prompt muda: (meu_projeto_venv) $

  # Agora pip instala pacotes APENAS neste ambiente
  pip install flask requests numpy

  # Ver pacotes instalados
  pip list
  pip freeze

  # Salvar dependências
  pip freeze > requirements.txt

  # Instalar dependências de um arquivo
  pip install -r requirements.txt

  # Desativar ambiente virtual
  deactivate

  # Deletar ambiente virtual (é só uma pasta)
  rm -rf meu_projeto_venv`}
          language="bash"
          title="ambientes virtuais"
        />

        <AlertBox type="danger" title="Nunca use sudo pip install!">
          Instalar pacotes com <code>sudo pip install</code> pode quebrar o sistema! O Fedora protege contra
          isso com <code>--externally-managed</code>. Sempre use <strong>ambientes virtuais</strong> ou
          <code>pip install --user</code>.
        </AlertBox>

        <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> pip — Gerenciador de Pacotes</h2>
        <CodeBlock
          code={`# Instalar pacote (dentro de um venv)
  pip install nome_pacote
  pip install flask==2.3.0          # versão específica
  pip install "flask>=2.0,<3.0"     # range de versões

  # Atualizar pacote
  pip install --upgrade nome_pacote
  pip install -U pip                 # atualizar o próprio pip

  # Remover pacote
  pip uninstall nome_pacote

  # Buscar pacotes
  pip search nome       # pode estar desabilitado
  # Use https://pypi.org/ para buscar

  # Informações de um pacote
  pip show flask

  # Verificar dependências com problemas
  pip check`}
          language="bash"
          title="pip"
        />

        <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Ferramentas Modernas</h2>
        <CodeBlock
          code={`# Poetry — gerenciador de dependências moderno
  sudo dnf install poetry
  # ou: pip install --user poetry

  poetry new meu-projeto
  cd meu-projeto
  poetry add flask
  poetry add --dev pytest
  poetry install
  poetry run python app.py

  # UV — gerenciador ultra-rápido (escrito em Rust)
  pip install --user uv
  uv venv
  uv pip install flask
  # 10-100x mais rápido que pip!

  # pyenv — gerenciar múltiplas versões do Python
  # Instalar dependências
  sudo dnf install gcc make zlib-devel bzip2-devel readline-devel \
    sqlite-devel openssl-devel tk-devel libffi-devel xz-devel
  curl https://pyenv.run | bash
  # Adicionar ao ~/.bashrc as linhas que o instalador mostrar

  pyenv install 3.12.0
  pyenv global 3.12.0`}
          language="bash"
          title="ferramentas modernas"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Estrutura de Projeto</h2>
        <CodeBlock
          code={`# Estrutura recomendada
  meu-projeto/
  ├── src/
  │   └── meu_modulo/
  │       ├── __init__.py
  │       └── main.py
  ├── tests/
  │   ├── __init__.py
  │   └── test_main.py
  ├── requirements.txt
  ├── pyproject.toml
  ├── README.md
  ├── .gitignore
  └── .venv/          # ambiente virtual (não commitar!)

  # .gitignore para Python
  __pycache__/
  *.pyc
  .venv/
  *.egg-info/
  dist/
  build/
  .env`}
          language="text"
          title="estrutura"
        />

        <h2>Pacotes Python via DNF</h2>
        <p>
          O Fedora também oferece pacotes Python via DNF (pré-compilados, testados):
        </p>
        <CodeBlock
          code={`# Buscar pacotes Python no Fedora
  dnf search python3-

  # Exemplos:
  sudo dnf install python3-flask
  sudo dnf install python3-requests
  sudo dnf install python3-numpy
  sudo dnf install python3-django
  sudo dnf install python3-pytest`}
          language="bash"
          title="pacotes via DNF"
        />

        <AlertBox type="info" title="DNF vs pip">
          Use <strong>DNF</strong> para ferramentas do sistema e bibliotecas globais. Use <strong>pip + venv</strong>
          para projetos de desenvolvimento. Para projetos profissionais, use <strong>Poetry</strong> ou <strong>UV</strong>.
        </AlertBox>
      </PageContainer>
    );
  }
  