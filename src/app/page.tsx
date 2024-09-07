import styles from "@/app/page.module.css";
import Title from "@/components/Title/title";
import Card from "@/components/card/card";
import InlineLink from "@/components/Inline Link/inlinelink";
import Link from 'next/link';
import PhotoCard from "@/components/Photo Card/photocard";
import fallsPhoto from '@/assets/photography/fallsman-1.jpg';

export default function Home() {
  return (
    <main className={styles.main}>
      <Title text="robert lockay"/>
      <div className={styles.body}>
        is a computer science student at akins high school. i like programming full stack, <InlineLink text="taking photos" link='/photography'/> and being outside.
      </div>
      <h2 className={styles.header}>projects</h2>
      <Card 
        title='mtn' 
        body='cli utility for sorting image files based on exif metadata. built in rust.' 
        link='https://github.com/epicspaceman/mtn'
      />
      <h2 className={styles.header}>experience</h2>
      <Card 
        title='atlassian' 
        subheader='summer internship 2024'
        body='increased the branch limit from 150 -> 1000 for automation for confluence.' 
        link='https://community.atlassian.com/t5/Confluence-articles/Increased-Branch-Limits-in-Automation-for-Confluence-150-gt-1/ba-p/2766294'
      />
    </main>
  );
}
