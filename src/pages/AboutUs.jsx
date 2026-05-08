import AboutHero from '../modules/shared/AboutHero';
import AboutValues from '../modules/shared/AboutValues';
import AboutLegacy from '../modules/shared/AboutLegacy';
import { ABOUT_CONTENT } from '../constants/about';

export default function AboutUs() {
  return (
    <>
      <AboutHero
        title={ABOUT_CONTENT.hero.title}
        description={ABOUT_CONTENT.hero.description}
        image={ABOUT_CONTENT.hero.image}
      />
      <AboutValues
        title={ABOUT_CONTENT.values.title}
        items={ABOUT_CONTENT.values.items}
      />
      <AboutLegacy
        title={ABOUT_CONTENT.legacy.title}
        description={ABOUT_CONTENT.legacy.description}
        image={ABOUT_CONTENT.legacy.image}
      />
    </>
  );
}

