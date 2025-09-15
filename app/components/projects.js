'use client';
import '@/app/styles/projects.css';

import { useLang } from '@/app/contexts/LangContext';

import CircularGallery from '@/app/utils/CircularGallery';
import DecryptedText from '@/app/utils/DecryptedText';
import AnimatedContent from '@/app/utils/AnimatedContent';
import FadeContent from '@/app/utils/FadeContent';


import Tooltip from './Tooltip';

const Projects = () => {
  const { language, translations } = useLang();

  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-title">
        <AnimatedContent
          distance={150}
          direction={'vertical'}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <DecryptedText
            text={translations?.projectsScreen?.projects || ''}
            animateOn="view"
            revealDirection="start"
            speed={50}
            sequential={true}
            useOriginalCharsOnly={true}
          />
        </AnimatedContent>
      </h1>
      <div className="projects-list-container">
        <CircularGallery 
          bend={2}
          textColor="#ffffff"
          borderRadius={0.05}
          items={[
            {
              text: "Toshokan",
              image: "/toshokan.png",
              id: "toshokan",
              link: "https://toshokan-azure.vercel.app/",
              tooltip: (
                <Tooltip
                  languages={["Svelte", "TypeScript"]}
                  chipColors={{ Svelte: "#ff3e00", TypeScript: "#3178c6" }}
                  videoPath="/videos/toshokan.mp4"
                />
              )
            },
            {
              text: "CSManager",
              image: "/csmanager.png",
              id: "csmanager",
              link: "https://github.com/morangoo/csmanager"
            },
            {
              text: "Work in Progress (WIP)",
              image: "https://i.imgur.com/JoPEuOt.jpeg",
              id: "WIP"
            },
            {
              text: "Work in Progress (WIP)",
              image: "https://media.tenor.com/uHpAcN5eP30AAAAe/stillesque.png",
              id: "WIP"
            },
            {
              text: "Work in Progress (WIP)",
              image: "https://i.imgur.com/E4TifXR.jpeg",
              id: "WIP"
            },
            {
              text: "Crowbar API",
              image: "/crowbar.png",
              id: "crowbar",
              link: "https://github.com/morangoo/crowbar"
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;