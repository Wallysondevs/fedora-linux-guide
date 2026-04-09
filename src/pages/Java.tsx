import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";
  import { Code, Settings, Package, Terminal, FileText, Zap } from "lucide-react";

  export default function Java() {
    return (
      <PageContainer
        title="Java no Fedora"
        subtitle="Configure o ambiente Java no Fedora: OpenJDK, múltiplas versões, Maven, Gradle, Spring Boot e boas práticas."
        difficulty="intermediario"
        timeToRead="30 min"
      >
        <h2><Code className="inline-block mr-2 mb-1 w-5 h-5" /> Java no Fedora</h2>
        <p>
          O Fedora usa <strong>OpenJDK</strong>, a implementação open source do Java. Como o Fedora é uma
          distro Red Hat (criadora do OpenJDK), ele sempre tem as versões mais recentes e bem mantidas.
        </p>

        <h2>Instalação</h2>
        <CodeBlock
          code={`# Instalar OpenJDK (versão mais recente)
  sudo dnf install java-latest-openjdk java-latest-openjdk-devel

  # Ou instalar versão LTS específica
  sudo dnf install java-21-openjdk java-21-openjdk-devel    # Java 21 LTS
  sudo dnf install java-17-openjdk java-17-openjdk-devel    # Java 17 LTS
  sudo dnf install java-11-openjdk java-11-openjdk-devel    # Java 11 LTS

  # Verificar versão
  java --version
  javac --version

  # Selecionar versão padrão (se múltiplas instaladas)
  sudo alternatives --config java
  sudo alternatives --config javac

  # Configurar JAVA_HOME
  echo 'export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))' >> ~/.bashrc
  source ~/.bashrc
  echo $JAVA_HOME`}
          language="bash"
          title="instalação"
        />

        <h2><Terminal className="inline-block mr-2 mb-1 w-5 h-5" /> Compilar e Executar</h2>
        <CodeBlock
          code={`# Criar arquivo
  cat > Main.java << 'EOF'
  public class Main {
      public static void main(String[] args) {
          System.out.println("Java no Fedora!");
      }
  }
  EOF

  # Compilar
  javac Main.java

  # Executar
  java Main

  # Compilar e executar (Java 11+)
  java Main.java    # compila e executa em um passo`}
          language="bash"
          title="compilar e executar"
        />

        <h2><Package className="inline-block mr-2 mb-1 w-5 h-5" /> Maven</h2>
        <CodeBlock
          code={`# Instalar Maven
  sudo dnf install maven

  # Verificar
  mvn --version

  # Criar projeto
  mvn archetype:generate \
    -DgroupId=com.meuapp \
    -DartifactId=meu-projeto \
    -DarchetypeArtifactId=maven-archetype-quickstart \
    -DinteractiveMode=false

  cd meu-projeto

  # Compilar
  mvn compile

  # Executar testes
  mvn test

  # Empacotar (criar JAR)
  mvn package

  # Executar JAR
  java -jar target/meu-projeto-1.0.jar

  # Limpar e reconstruir
  mvn clean install`}
          language="bash"
          title="Maven"
        />

        <h2><Zap className="inline-block mr-2 mb-1 w-5 h-5" /> Gradle</h2>
        <CodeBlock
          code={`# Instalar Gradle
  sudo dnf install gradle

  # Criar projeto
  gradle init --type java-application

  # Compilar
  gradle build

  # Executar
  gradle run

  # Executar testes
  gradle test

  # Limpar
  gradle clean`}
          language="bash"
          title="Gradle"
        />

        <h2><FileText className="inline-block mr-2 mb-1 w-5 h-5" /> Spring Boot</h2>
        <CodeBlock
          code={`# Criar projeto Spring Boot (via Spring Initializr)
  # Acesse: https://start.spring.io/
  # Ou via CLI:
  curl https://start.spring.io/starter.zip \
    -d dependencies=web,jpa,postgresql \
    -d type=maven-project \
    -d language=java \
    -d javaVersion=21 \
    -d name=meuapp \
    -o meuapp.zip

  unzip meuapp.zip -d meuapp
  cd meuapp

  # Executar
  ./mvnw spring-boot:run

  # Construir para produção
  ./mvnw clean package -DskipTests
  java -jar target/meuapp-0.0.1-SNAPSHOT.jar`}
          language="bash"
          title="Spring Boot"
        />

        <h2>JDKs Disponíveis no Fedora</h2>
        <table>
          <thead><tr><th>Versão</th><th>Tipo</th><th>Status</th><th>Pacote</th></tr></thead>
          <tbody>
            <tr><td>Java 21</td><td>LTS</td><td>Recomendado</td><td><code>java-21-openjdk</code></td></tr>
            <tr><td>Java 17</td><td>LTS</td><td>Suportado</td><td><code>java-17-openjdk</code></td></tr>
            <tr><td>Java 11</td><td>LTS</td><td>Legado</td><td><code>java-11-openjdk</code></td></tr>
            <tr><td>Último</td><td>Feature</td><td>Mais recente</td><td><code>java-latest-openjdk</code></td></tr>
          </tbody>
        </table>

        <AlertBox type="success" title="Múltiplas versões">
          O Fedora permite instalar várias versões do Java simultaneamente. Use <code>sudo alternatives --config java</code>
          para alternar entre elas globalmente, ou configure <code>JAVA_HOME</code> por projeto.
        </AlertBox>
      </PageContainer>
    );
  }
  