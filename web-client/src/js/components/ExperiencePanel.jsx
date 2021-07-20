import * as React from 'react';
import {useEffect, useState} from "react";
import {ExperienceApi} from "../apis/experiencesApi"

export const ExperiencePanel = () => {

    const [experiences, setExperiences] = useState([]);

    // useEffect con el parámetro "[]"
    // se puede usar para inicializar el componente.
    // Más info: https://es.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    useEffect(() => {
        let experienceApi = new ExperienceApi()
        experienceApi.getExperiences()
            .then( experiences => setExperiences(experiences))
    }, []);

    return <div className={"experiencesList"}>
        <p className={"experiencesList__title"}>Experiences</p>
        <div className={"experiencesList__list"}>
            {experiences.map((experience) =>
                <div className={"experiencesList__item experience"}>
                    <div className={"experience__name"}> {experience.name} </div>
                    <div className={"experience__details"}> {experience.pricePerPerson + " €" } </div>
                </div>
            )}
        </div>
    </div>

}
