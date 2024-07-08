const sections = [
    {
      id: 1,
      title: 'Insira alguns dados básicos',
      inputs: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'E-mail',
          placeholder: 'Digite seu e-mail'
        },
      ]
    },
    {
      id: 2,
      title: 'Agora, mais alguns dados sobre você:',
      inputs: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        },
      ]
    },
    {
      id: 3,
      title: 'Para finalizar, quais são os seus planos?',
      inputs: [],
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        },
      ]
    }
  ]

  export {
    sections
  }