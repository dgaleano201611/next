import Image from 'next/image'
import React from 'react'
import styles from '@/styles/CharacterInfo.module.css'


const CharacterId = ({characterRickMorty}) => {
  return(
    <React.Fragment>
    <div className={styles.container}>

      <h1 className={styles.containerTitle}>Character Details</h1>
      <div className={styles.content}>
        <Image
          className={styles.contentImage} 
          src={characterRickMorty.image}
          width={800}
          height={500}
        />
        <h2>{characterRickMorty.name}</h2>
        <p>{characterRickMorty.species}</p>
        <p>{characterRickMorty.gender}</p>
      </div>
    </div>

    </React.Fragment>


  )
}

export default CharacterId

export async function getServerSideProps({params}) {
  const apiRickMorty = await fetch(`https://rickandmortyapi.com/api/character/${params.characterId}`)
  const characterRickMorty = await apiRickMorty.json()
  return {
    props: {
      characterRickMorty
    }, // will be passed to the page component as props
  }
}