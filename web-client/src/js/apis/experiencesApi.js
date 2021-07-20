export class ExperienceApi {

    // hace una llamada al backend y convierte el resultado en un JSON
    getExperiences() {
        return fetch("/experiences")
            .then(response => response.json())
    }
}