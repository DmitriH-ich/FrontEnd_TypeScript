import React, { useState } from 'react';
import { brotherhood } from '../data';
import BrotherCard from '../../../components/brothercard/BrotherCard';
import { IBrother } from './type';




export default function BrotherHood() {
    const [brothers, setBrothers] = useState<IBrother[]>(brotherhood);
  
    return (
      <div className="container-brotherhood">
        <h1>6. React: map() components</h1>
        {brothers.map(brother => (
          <BrotherCard key={brother.id} brotherProp={brother} setBrothers={setBrothers} />
        ))}
      </div>
    );
  }