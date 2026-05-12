import ConTainer from '../components/ui/Container/ConTainer'
import HeroSection from '../modules/home/components/HeroSection'
import Section from '../modules/home/components/Section'
import Sectiontow from '../modules/home/components/Sectiontow'
import LastSection from '../modules/home/components/LastSection'

export default function Home() {
 
  return (
    <ConTainer>
      <HeroSection/>
      <Section/>
      <Sectiontow/>
      <LastSection/>
    </ConTainer>
  )
}
