class CepService {
  static async getAddress(cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        return data;
      } else {
        throw new Error('CEP não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      throw new Error('Erro ao buscar CEP');
    }
  }
}

export default CepService;
