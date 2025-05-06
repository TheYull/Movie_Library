import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPerson } from "../../features/persons/personApi";
import { PersonCard } from "../../features/persons/PersonCard";

export const PersonPage = () => {
    const dispatch = useDispatch();
    const persons = useSelector((state) => state.person?.data || []);
    const loading = useSelector((state) => state.person?.loading);
    const error = useSelector((state) => state.person?.error);

    useEffect(() => {
      dispatch(fetchPerson());
  }, [dispatch]);

  return (
    <div className='container'>
      <h2 className='headline'>Popular People</h2>
      {loading && <p>Loading..</p>}
      {error && <p>Error: {error}</p>}
      <div className='subheader'>
      {persons.length > 0 ? (
    persons.map(person => (
        <PersonCard key={person.id} person={person} />
    ))
) : (
    <p>Loading persons...</p>
)}
        </div>
    </div>
  )
}
