import Header from './components/Header'
import Sidebar from './components/Sidebar'
import NewsFeed from './components/NewsFeed'
import MemeTokenInfo from './components/MemeTokenInfo'
import PrivacySettings from './components/PrivacySettings'
import DataCollectionBar from './components/DataCollectionBar'
import MetaversePreview from './components/MetaversePreview'
import TokenBurning from './components/TokenBurning'
import BuzzwordGenerator from './components/BuzzwordGenerator'
import WeStealEverything from './components/WeSteelEverything'
import MemeTokenDisclaimer from './components/MemeTokenDisclaimer'
import Footer from './components/Footer'
import ProfileHeader from './components/ProfileHeader'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar />
          <div className="flex-grow space-y-6">
            <ProfileHeader />
            <MemeTokenInfo />
            <WeStealEverything />
            <DataCollectionBar />
            <PrivacySettings />
            <MetaversePreview />
            <BuzzwordGenerator />
            <NewsFeed />
            <MemeTokenDisclaimer />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

