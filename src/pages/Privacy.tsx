
export function Privacy() {
  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
        <div className="prose max-w-none">
          <p className="mb-4">1. Coleta de Dados</p>
          <p className="text-gray-600 mb-6">
            Coletamos apenas os dados necessários para a prestação dos nossos serviços.
          </p>

          <p className="mb-4">2. Uso dos Dados</p>
          <p className="text-gray-600 mb-6">
            Os dados coletados são utilizados exclusivamente para melhorar nossos serviços e garantir uma melhor experiência ao cliente.
          </p>

          <p className="mb-4">3. Proteção de Dados</p>
          <p className="text-gray-600 mb-6">
            Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados.
          </p>

          <p className="mb-4">4. Seus Direitos</p>
          <p className="text-gray-600 mb-6">
            Você tem direito a acessar, corrigir ou solicitar a exclusão dos seus dados pessoais.
          </p>
        </div>
      </div>
    </div>
  );
}
