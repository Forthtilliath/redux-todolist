/**
 * Permet de simuler l'attente d'une réponse à un serveur back
 * @param {Number} duration 
 * @returns 
 */
export default function wait(duration = 1000) {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve({});
        }, duration);
    });
}
