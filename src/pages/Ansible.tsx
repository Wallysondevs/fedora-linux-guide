import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Settings, Server, FileText, Play, Shield, Layers } from "lucide-react";

  export default function Ansible() {
    return (
      <PageContainer
        title="Ansible — Automação de Infraestrutura"
        subtitle="Automatize a configuração de servidores com Ansible no Fedora: inventários, playbooks, roles, módulos e gerenciamento remoto."
        difficulty="avancado"
        timeToRead="35 min"
      >
        <h2><Settings className="inline-block mr-2 mb-1 w-5 h-5" /> O que é Ansible?</h2>
        <p>
          O <strong>Ansible</strong> é uma ferramenta de automação que permite configurar e gerenciar
          dezenas ou centenas de servidores ao mesmo tempo, usando arquivos YAML simples chamados
          <strong> playbooks</strong>. Ele é <em>agentless</em> — não precisa instalar nada nos servidores
          remotos, usando apenas SSH.
        </p>
        <p>
          O Ansible foi criado pela Red Hat (mesma empresa por trás do Fedora), e é perfeito para:
          instalar pacotes, configurar serviços, implantar aplicações, gerenciar usuários e manter
          a infraestrutura consistente.
        </p>

        <h2>Instalação</h2>
        <CodeBlock
          code={`# Instalar Ansible
  sudo dnf install ansible

  # Verificar versão
  ansible --version

  # Verificar conexão com um host
  ansible all -m ping -i "192.168.1.100,"
  # O "," no final é necessário para um único host`}
          language="bash"
          title="instalação"
        />

        <h2><Server className="inline-block mr-2 mb-1 w-5 h-5" /> Inventário</h2>
        <CodeBlock
          code={`# /etc/ansible/hosts ou criar arquivo local
  # inventory.ini

  [webservers]
  web1 ansible_host=192.168.1.10
  web2 ansible_host=192.168.1.11

  [dbservers]
  db1 ansible_host=192.168.1.20

  [all:vars]
  ansible_user=admin
  ansible_ssh_private_key_file=~/.ssh/id_ed25519

  # Testar conectividade
  ansible all -m ping -i inventory.ini
  ansible webservers -m ping -i inventory.ini`}
          language="ini"
          title="inventário"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Comandos Ad-Hoc</h2>
        <CodeBlock
          code={`# Executar comando em todos os hosts
  ansible all -m command -a "uptime" -i inventory.ini

  # Instalar pacote em todos os webservers
  ansible webservers -m dnf -a "name=nginx state=present" -i inventory.ini --become

  # Reiniciar serviço
  ansible webservers -m service -a "name=nginx state=restarted" -i inventory.ini --become

  # Copiar arquivo
  ansible all -m copy -a "src=./config.conf dest=/etc/app/config.conf" -i inventory.ini --become

  # Ver informações do sistema (facts)
  ansible web1 -m setup -i inventory.ini`}
          language="bash"
          title="comandos ad-hoc"
        />

        <h2><Play className="inline-block mr-2 mb-1 w-5 h-5" /> Playbooks</h2>
        <CodeBlock
          code={`# playbook.yml — Configurar servidor web
  ---
  - name: Configurar servidores web
    hosts: webservers
    become: true

    vars:
      app_port: 8080
      app_name: meuapp

    tasks:
      - name: Atualizar sistema
        dnf:
          name: '*'
          state: latest

      - name: Instalar Nginx
        dnf:
          name: nginx
          state: present

      - name: Copiar configuração do Nginx
        template:
          src: templates/nginx.conf.j2
          dest: /etc/nginx/conf.d/app.conf
        notify: Reiniciar Nginx

      - name: Iniciar e habilitar Nginx
        service:
          name: nginx
          state: started
          enabled: true

      - name: Abrir firewall
        firewalld:
          service: http
          permanent: true
          state: enabled
          immediate: true

    handlers:
      - name: Reiniciar Nginx
        service:
          name: nginx
          state: restarted`}
          language="yaml"
          title="playbook básico"
        />

        <CodeBlock
          code={`# Executar playbook
  ansible-playbook playbook.yml -i inventory.ini

  # Verificar sem executar (dry-run)
  ansible-playbook playbook.yml -i inventory.ini --check

  # Ver quais hosts seriam afetados
  ansible-playbook playbook.yml -i inventory.ini --list-hosts

  # Executar com mais detalhes
  ansible-playbook playbook.yml -i inventory.ini -v    # verbose
  ansible-playbook playbook.yml -i inventory.ini -vvv  # muito verbose`}
          language="bash"
          title="executar playbook"
        />

        <h2><Layers className="inline-block mr-2 mb-1 w-5 h-5" /> Playbook Completo: Setup de Servidor</h2>
        <CodeBlock
          code={`# setup-servidor.yml
  ---
  - name: Configuração completa de servidor Fedora
    hosts: all
    become: true

    tasks:
      - name: Atualizar todos os pacotes
        dnf:
          name: '*'
          state: latest

      - name: Instalar pacotes essenciais
        dnf:
          name:
            - vim
            - htop
            - tmux
            - git
            - curl
            - wget
            - firewalld
            - fail2ban
          state: present

      - name: Configurar timezone
        timezone:
          name: America/Sao_Paulo

      - name: Criar usuário deploy
        user:
          name: deploy
          groups: wheel
          shell: /bin/bash
          create_home: true

      - name: Configurar SSH - desabilitar login root
        lineinfile:
          path: /etc/ssh/sshd_config
          regexp: '^PermitRootLogin'
          line: 'PermitRootLogin no'
        notify: Reiniciar SSH

      - name: Habilitar e iniciar firewalld
        service:
          name: firewalld
          state: started
          enabled: true

      - name: Habilitar e iniciar Fail2Ban
        service:
          name: fail2ban
          state: started
          enabled: true

    handlers:
      - name: Reiniciar SSH
        service:
          name: sshd
          state: restarted`}
          language="yaml"
          title="setup completo"
        />

        <h2>Módulos Úteis</h2>
        <table>
          <thead><tr><th>Módulo</th><th>Função</th><th>Exemplo</th></tr></thead>
          <tbody>
            <tr><td><code>dnf</code></td><td>Gerenciar pacotes</td><td><code>dnf: name=nginx state=present</code></td></tr>
            <tr><td><code>service</code></td><td>Gerenciar serviços</td><td><code>service: name=nginx state=started</code></td></tr>
            <tr><td><code>copy</code></td><td>Copiar arquivos</td><td><code>copy: src=./file dest=/etc/file</code></td></tr>
            <tr><td><code>template</code></td><td>Templates Jinja2</td><td><code>template: src=app.j2 dest=/etc/app.conf</code></td></tr>
            <tr><td><code>user</code></td><td>Gerenciar usuários</td><td><code>user: name=deploy groups=wheel</code></td></tr>
            <tr><td><code>firewalld</code></td><td>Configurar firewall</td><td><code>firewalld: service=http state=enabled</code></td></tr>
            <tr><td><code>command</code></td><td>Executar comando</td><td><code>command: uptime</code></td></tr>
            <tr><td><code>lineinfile</code></td><td>Editar linha em arquivo</td><td><code>lineinfile: path=/etc/ssh/sshd_config ...</code></td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Idempotência">
          Playbooks Ansible são <strong>idempotentes</strong> — você pode executá-los múltiplas vezes
          e o resultado será o mesmo. Se o Nginx já estiver instalado, o Ansible não reinstala.
          Isso torna seguro executar playbooks repetidamente.
        </AlertBox>
      </PageContainer>
    );
  }
  