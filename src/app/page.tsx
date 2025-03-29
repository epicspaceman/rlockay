import styles from "@/app/page.module.css";
import Title from "@/components/Title/title";
import InlineLink from "@/components/Inline Link/inlinelink";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.title}>
          <Title text="robert lockay"/>
        </div>
        <div className={styles.links}>
            <InlineLink href="/photography">photos</InlineLink>
            <InlineLink href="https://github.com/epicspaceman">github</InlineLink>
            <InlineLink href="resume/Robert Lockay Resume.pdf" isDownload>resume</InlineLink>
        </div>
      </div>
    </main>
  );
}
