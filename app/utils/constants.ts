export interface Company {
  logo: string
  value: string
  label: string
  time: string
  jobName: string
  description: string
  detail: {
    teamSize: number
    techStacks: string[]
    type: string
    industry: string
    website: string
    story: string
    responsibility: string
  }
}

export interface Moment {
  id: string
  title: string
  description: string
  image: string
  category: 'life' | 'love' | 'game' | 'work' | 'travel'
  date: string
  tags?: string[]
}

export const companies: Company[] = [
  {
    logo: '/coin98.svg',
    value: 'coin98',
    label: 'Coin98',
    time: '1/1/2022 - 23/11/2022',
    jobName: 'Front End Developer',
    detail: {
      teamSize: 60,
      techStacks: ['reactjs', 'nextjs'],
      industry: 'blockchain',
      type: 'product',
      website: 'https://coin98.net',
      story:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections",
      responsibility:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections"
    },
    description:
      "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections"
  },
  {
    logo: '/ts.png',
    value: 'traitsniper',
    label: 'Traitsniper',
    time: '1/1/2022 - 23/11/2022',
    jobName: 'Front End Developer',
    detail: {
      teamSize: 60,
      techStacks: ['reactjs', 'nextjs'],
      type: 'product',
      industry: 'blockchain',
      website: 'https://coin98.net',
      story:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections",
      responsibility:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections"
    },
    description:
      "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections"
  },
  {
    logo: '/hydrax.jpeg',
    value: 'hydrax',
    label: 'Hydrax',
    time: '1/1/2022 - 23/11/2022',
    jobName: 'Front End Developer',
    detail: {
      teamSize: 60,
      techStacks: ['reactjs', 'nextjs'],
      industry: 'blockchain',
      type: 'outsource',
      story:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections",
      responsibility:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections",
      website: 'https://coin98.net'
    },
    description:
      "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections"
  },
  {
    logo: '/dinovative.jpg',
    value: 'dinovative',
    label: 'Dinovative',
    time: '1/1/2022 - 23/11/2022',
    jobName: 'Front End Developer',
    detail: {
      teamSize: 60,
      techStacks: ['reactjs', 'nextjs'],
      industry: 'blockchain',
      type: 'outsource',
      website: 'https://coin98.net',
      story:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections",
      responsibility:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections"
    },
    description:
      "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections"
  },
  {
    logo: '/pyco.png',
    value: 'pyco-group',
    label: 'Pyco group',
    time: '1/1/2022 - 23/11/2022',
    detail: {
      teamSize: 60,
      techStacks: ['reactjs', 'nextjs'],
      industry: 'blockchain',
      type: 'outsource',
      website: 'https://coin98.net',
      story:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections",
      responsibility:
        "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections"
    },
    jobName: 'Front End Developer',
    description:
      "We are one of the best rarity ranking for NFT's on ethereum blockchain, we provide service NFT's api, fast reveal NFTs, buying, selling and help you keep tracking NFT's collections"
  }
]

export const moments: Moment[] = []
