type Participant = {
  name: string
  type: "country" | "state"
  code: string
}

export const editionParticipantsData: Record<string, Participant[]> = {
  "1": [
    {name: "Murillo", type: "country", code: "br"},
    {name: "Obalski", type: "country", code: "gb-eng"},
    {name: "Bono", type: "country", code: "fr"},
    {name: "Danicadeira", type: "country", code: "pt"},
    {name: "Flaminn", type: "country", code: "de"},
    {name: "Mmock", type: "country", code: "es"},
    {name: "Joj", type: "country", code: "it"},
    {name: "Fernando", type: "country", code: "nl"},
    {name: "Andriolo", type: "country", code: "uy"},
    {name: "Gimenez", type: "country", code: "ar"},
  ],

  "2": [
    {name: "Obalski", type: "country", code: "ar"},
    {name: "Suzuki", type: "country", code: "br"},
    {name: "Mmock", type: "country", code: "es"},
    {name: "Pedro", type: "country", code: "fr"},
    {name: "Gimenez", type: "country", code: "nl"},
    {name: "Cauã", type: "country", code: "gb-eng"},
    {name: "Jota", type: "country", code: "it"},
    {name: "Angelo", type: "country", code: "pt"},
    {name: "Fernando", type: "country", code: "ru"},
    {name: "Miguel", type: "country", code: "co"},
  ],

  "3": [
    {name: "Angelo", type: "state", code: "sc"},
    {name: "Davi", type: "country", code: "br"},
    {name: "Erik", type: "country", code: "it"},
    {name: "Fernando", type: "country", code: "fr"},
    {name: "Gimenez", type: "country", code: "es"},
    {name: "Miguel", type: "state", code: "pb"},
    {name: "João Daora", type: "state", code: "ba"},
    {name: "Mmock", type: "state", code: "pe"},
    {name: "Pedro", type: "state", code: "sp"},
    {name: "Obalski", type: "state", code: "rs"},
    {name: "Suzuki", type: "state", code: "mg"},
  ]
  
}