import React from 'react';
import { v4 } from 'uuid';
import { IBrother } from '../../homeworks/homework_08/brotherhood/type';
import styles from './brothercard.module.css';

interface IBrotherCardProps {
  brotherProp: IBrother;
  setBrothers: React.Dispatch<React.SetStateAction<IBrother[]>>;
}

export default function BrotherPropCard ({ brotherProp, setBrothers } : IBrotherCardProps) {
  const delBrother = (id: number) => {
    setBrothers(prev => prev.filter(brother => brother.id !== id));
  }

  return (
    <div className={styles.brotherCardContainer}>
      <h2>{brotherProp.name}</h2>
      <p>race: {brotherProp.race}</p>
      <p>brother id: {brotherProp.id}</p>
      <ol>
        {brotherProp.skills.map(skill => (
          <li key={v4()}>{skill}</li>
        ))}
      </ol>
      <img src={brotherProp.image} alt="" />
      <button onClick={() => delBrother(brotherProp.id)} style={{marginTop: '10px'}}>Delete brother</button>
    </div>
  );
}



  /// мы сравниваем id в стейте brothers с массивом объектов в родительском компоненте
  // с id конкретной карточки, которую получаем из props