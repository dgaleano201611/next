import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/styles/Character.module.css";

const Characters = ({ dataRickMorty }) => {
  console.log("datos:", dataRickMorty);

  return (
    <React.Fragment>
      <div >
        <h1 className={styles.charactersTitle}>
          All Characters Rick and Morty
        </h1>
        <div className={styles.charactersContainer}>
          {dataRickMorty.results.map((item) => {
            return (
              <Link href={`/characters/${item.id}`} key={item.id}>
                <Image
                  src={item.image}
                  className={styles.characterContent}
                  width={350}
                  height={300}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Characters;

export async function getServerSideProps(context) {
  const apiRickMorty = await fetch(
    "https://rickandmortyapi.com/api/character",
    { method: "GET" }
  );
  const dataRickMorty = await apiRickMorty.json();
  return {
    props: {
      dataRickMorty,
    }, // will be passed to the page component as props
  };
}
