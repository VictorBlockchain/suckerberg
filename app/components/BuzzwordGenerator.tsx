'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BuzzwordGenerator() {
  const [buzzword, setBuzzword] = useState('')

  const buzzwords = [
    "blockchain", "NFT", "decentralized", "smart contract", "tokenomics",
    "DeFi", "Web3", "crypto", "metaverse", "DAO", "HODL", "moon",
    "gas fees", "mining", "staking", "airdrop", "ICO", "whale",
    "FUD", "FOMO", "lambo", "to the moon", "diamond hands"
  ]

  const generateBuzzword = () => {
    const randomBuzzwords = Array(3).fill(null).map(() => 
      buzzwords[Math.floor(Math.random() * buzzwords.length)]
    )
    setBuzzword(randomBuzzwords.join(' '))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-facebook-blue">Web 3.0 Buzzword Generator</h2>
      <div className="flex space-x-2">
        <Input value={buzzword} readOnly placeholder="Your buzzwords will appear here" />
        <Button onClick={generateBuzzword}>Generate</Button>
      </div>
      <p className="text-sm text-gray-600 mt-2">Use these buzzwords to sound smart in your next post!</p>
    </div>
  )
}

